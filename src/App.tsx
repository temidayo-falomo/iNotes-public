import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { AppContext } from "./helper/Context";
import CreateFolder from "./pages/create-folder/CreateFolder";
import CreateNote from "./pages/create-note/CreateNote";
import Loading from "./pages/loading/Loading";
import Login from "./pages/login/Login";
import Notes from "./pages/notes/Notes";
import RecentlyDeleted from "./pages/recently-deleted/RecentlyDeleted";
import Settings from "./pages/settings/Settings";
import SingleNote from "./pages/single-note/SingleNote";

//Refer To ReadMe for detailed explaination on my thought & coding process.
//Row means "downwards row", i.e the alternative display.

function App() {
  //* Press Control + Shift + F to search vsCode for where a variable is used throughout the code.

  //navigate
  const navigate = useNavigate();

  //TODO : Try using offlinejs libary to display alerts

  //Loading Boolean
  const [loading, setLoading] = useState<boolean>(true);

  //Check current URL Path
  const [noteId, setNoteId] = useState(useParams().id);

  //Auth State
  const [isAuth, setIsAuth] = useState<boolean>(false);

  //! Important State
  //! (Its an object containing all important user properties)
  const [user, setUser] = useState<any>({});

  //Toggles between list & row view
  const [listView, setListView] = useState<boolean>(true);

  //Toggles The Font weight in the activity bar
  const [fontWgt, setFontWgt] = useState<string>("");

  //Toggles The Theme between Light & Dark
  const [theme, setTheme] = useState<any>(
    localStorage.getItem("iNotesLightSettings") || "light"
  );

  //Keeps track of what folder was previously clicked
  const [currentFolder, setCurrentFolder] = useState<string>("All iCloud");

  //! Row, as used multiple times means the downwards row view.
  //I have made the row-state names and uses as self descriptive as possible
  const [rowSelectCard, setRowSelectCard] = useState<any>("");
  const [rowCardClicked, setRowCardClicked] = useState<boolean>(false);
  const [rowNoteNumber, setRowNoteNumber] = useState<number>(0);
  const [unMountRowView, setUnMountRowView] = useState<boolean>(false);

  //Toggles Fullscreen "Add Folder" Modal Box.
  const [showAddFolderModal, setShowAddFolderModal] = useState<boolean>(false);

  //Array Containing all user's folders.
  const [folderNames, setFolderNames] = useState<any>([]);

  //Array containing all User Notes Objects.
  const [notes, setNotes] = useState<any>([]);

  //String Containing Value of the text being written
  // in "./create-note/CreateNote.tsx"
  const [writingNote, setWritingNote] = useState("");

  //Keeps track of whatever note,
  const [noteIdx, setNoteIdx] = useState<number>(0);

  //Get single note from notes array.
  const [singleNoteTxt, setSingleNoteTxt] = useState<any>(
    user?.notes?.find((x: any) => x._id === noteId || x?.noteIdx === noteIdx)
      ?.noteText
  );

  //Toggles leftbar display.
  const [leftBarDisplay, setLeftbarDisplay] = useState<boolean>(false);

  //Keeps Track of whatever is being typed in searchbar
  //Check "./activity-bar/ActivityBar.tsx"
  const [searchNotesText, setSearchNotesText] = useState<string>("");

  //Array Containing All Deleted Notes.
  const [deletedNotes, setDeletedNotes] = useState([]);

  //
  const [noteNumber, setNoteNumber] = useState(0);

  //
  const [userError, setUserError] = useState<any>(false);

  //*Function to get Current User From Backend.
  const getUser = async () => {
    //get current user based on id
    await axios
      .get(
        `API/get-user/${localStorage.getItem(
          "iNotesUserId"
        )}`
      )
      .then((res) => {
        //set relevant states from api call
        setUser(res.data.user);
        setFolderNames(res.data.user.folderNames);
        setNotes(res.data.user.notes);
        setDeletedNotes(res.data.user.deleted);

        //Setting the loading state to be false
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        //When user error is true, notes are saved to localStorag
        setUserError(true);
        //loading is cancelled when
        setLoading(false);
        // // localStorage.setItem("iNotesAllNotes", JSON.stringify(notes));
        //Add "All iCloud" when there's an error
        setFolderNames([
          ...folderNames,
          {
            folderName: "All iCloud",
            _id: new Date(),
          },
        ]);
        //Add password
        // setUser({
        //   password: "1234",
        // });
      });
  };

  //Calling Get User Function On Render.
  useEffect(() => {
    getUser();

    if (!localStorage.getItem("iNotesUserId")) {
      navigate("/login");
    }
  }, []);

  //When user error is true, this useeffect is run.
  useEffect(() => {
    if (userError) {
      let val: any = localStorage.getItem("iNotesAllNotes");
      let newVall: any = JSON.parse(val);
      setNotes(newVall);
    }
  }, [userError]);

  //
  useEffect(() => {
    if (notes?.length) {
      localStorage.setItem("iNotesAllNotes", JSON.stringify(notes));
    }
  }, [notes]);

  /*
  // useEffect(() => {
  //   localStorage.setItem("iNotesAllNotes", JSON.stringify([notes]));
  // }, [notes]);
  */

  //*Function to update notes on row view.
  //!It is needed globally to be used in multiple components, hence it is being initialized at the Root Level.
  //!Todo: Need info on whether its the best way to do this, its definitely the most convinient way ngl.

  const updateRowViewNote = () => {
    var time = new Date();

    //function only runs when "iNotesRowEditNoteObject" is present in localStorage
    if (localStorage.getItem("iNotesRowEditNoteObject")) {
      let val: any = localStorage.getItem("iNotesRowEditNoteObject");
      let newVal: any = JSON.parse(val);

      //edit note on server
      axios
        .put("API/edit-note", {
          editedNote: newVal?.iNotesRowCurrentEditNote,
          userId: localStorage.getItem("iNotesUserId"),
          noteTitle: newVal?.iNotesRowCurrentEditNote
            .split(" ")
            .slice(0, 2)
            .join(" "),
          index: localStorage.getItem("iNotesRowEditNoteIndex"),
          timestamp: time,
        })
        .catch((err) => console.log(err));

      //set "iNotesRowEditNoteObject" back to false so the function does'nt run till another note is edited
      localStorage.setItem("iNotesRowEditNoteObject", "");
    }
  };

  //Useeffect to get current width & setLeftbar accordingly,
  useEffect(() => {
    //TODO : It is possible to mix css with styled components. Do this.
    if (window.innerWidth > 630) {
      setLeftbarDisplay(true);
    }
  }, [window.innerWidth]);

  //Reurns The Loading Component If "Loading" Is True
  if (loading) {
    return <Loading theme={theme} />;
  }

  //Sharing Above State & Variables Globally, Using Context.
  //!TODO : Again, need to confirm is this is the best way to do this.

  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
        getUser,
        loading,
        setLoading,
        listView,
        setListView,
        fontWgt,
        setFontWgt,
        theme,
        setTheme,
        user,
        setUser,
        currentFolder,
        setCurrentFolder,
        rowSelectCard,
        setRowSelectCard,
        rowCardClicked,
        setRowCardClicked,
        showAddFolderModal,
        setShowAddFolderModal,
        folderNames,
        setFolderNames,
        writingNote,
        setWritingNote,
        notes,
        setNotes,
        singleNoteTxt,
        setSingleNoteTxt,
        unMountRowView,
        setUnMountRowView,
        updateRowViewNote,
        leftBarDisplay,
        setLeftbarDisplay,
        searchNotesText,
        setSearchNotesText,
        deletedNotes,
        setDeletedNotes,
        noteIdx,
        setNoteIdx,
        noteNumber,
        setNoteNumber,
        rowNoteNumber,
        setRowNoteNumber,
        userError,
        setUserError,
      }}
    >
      <div className="App">
        {showAddFolderModal && <CreateFolder />}

        <GlobalStyle />

        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Notes />} />

          <Route path="/:id" element={<SingleNote />} />

          <Route path="/create-note" element={<CreateNote />} />

          <Route path="/deleted" element={<RecentlyDeleted />} />

          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

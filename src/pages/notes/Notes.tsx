import axios from "axios";
import React, { useContext, useEffect } from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import Main from "../../components/main/Main";
import { AppContext } from "../../helper/Context";
import { StyledNotes } from "./Notes.styled";

function Notes() {
  const {
    theme,
    currentFolder,
    notes,
    setNotes,
    noteIdx,
    setNoteNumber,
    setUserError,
  } = useContext(AppContext);

  /*
  TODO: Add current input value the id to local storage
  (Because the state doesnt persist during page switching, cos useContext) then,
  onRender HERE make the neccery update on MongoDb).
  */

  //ADD NOTE ON PAGE RENDER
  const handleAddNote = () => {
    let val: any = localStorage.getItem("iNotesNotesObject");
    let newVal: any = JSON.parse(val);
    var time = new Date();

    if (newVal.iNotesCurrentNote) {
      axios
        .post("API/add-note", {
          folderName: currentFolder,
          noteText: newVal?.iNotesCurrentNote,
          noteTitle: newVal?.iNotesCurrentNote.split(" ").slice(0, 2).join(" "),
          date: new Date().toLocaleDateString(),
          pinnedState: false,
          userId: localStorage.getItem("iNotesUserId"),
          timestamp: time,
          lockedState: false,
        })
        .catch((err) => {
          console.log(err);
          setUserError(true);
          // if (userError) {
          localStorage.setItem("iNotesAllNotes", JSON.stringify(notes));
          // }
        });

      setNotes([
        ...notes,
        {
          folder: currentFolder,
          noteText: newVal?.iNotesCurrentNote,
          noteTitle: newVal?.iNotesCurrentNote
            ?.split(" ")
            .slice(0, 2)
            .join(" "),
          date: new Date().toLocaleDateString(),
          pinnedState: false,
          userId: localStorage.getItem("iNotesUserId"),
          timestamp: time,
          noteIdx: notes?.length,
          lockedState: false,
        },
      ]);

      setNoteNumber(notes?.length + 1);

      localStorage.setItem("iNotesNotesObject", "");
    } else {
      //edit
    }
  };

  //EDIT NOTE
  const handleEditNote = async () => {
    let val: any = localStorage.getItem("iNotesEditNoteObject");
    let newVal: any = JSON.parse(val);
    var time = new Date();

    axios
      .put("API/edit-note", {
        editedNote: newVal?.iNotesCurrentEditNote,
        userId: "6d8Apm8vqeXhTpZIyhYZu98skat2",
        noteTitle: newVal?.iNotesCurrentEditNote
          .split(" ")
          .slice(0, 2)
          .join(" "),
        index: localStorage.getItem("iNotesEditNoteIndex"),
        timestamp: time,
      })
      .catch((err) => console.log(err));

    setNotes((current: any) =>
      current.map((obj: any) => {
        if (
          obj._id === localStorage.getItem("iNotesEditNoteId") ||
          obj.noteIdx === noteIdx
        ) {
          return {
            ...obj,
            noteText: newVal?.iNotesCurrentEditNote,
            noteTitle: newVal?.iNotesCurrentEditNote
              .split(" ")
              .slice(0, 2)
              .join(" "),
            timestamp: time,
          };
        }
        return obj;
      })
    );

    localStorage.setItem("iNotesEditNoteObject", "");
  };

  //
  useEffect(() => {
    if (localStorage.getItem("iNotesNotesObject")) {
      handleAddNote();
    }

    if (localStorage.getItem("iNotesEditNoteObject")) {
      handleEditNote();
    }
  }, []);

  return (
    <StyledNotes theme={theme}>
      <Leftbar />
      <Main />
    </StyledNotes>
  );
}

export default Notes;

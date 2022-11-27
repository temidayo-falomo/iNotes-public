import React, { useContext, useEffect } from "react";
import { AppContext } from "../../helper/Context";
import DeletedCard from "./DeletedCard";
import { StyledDeletedCards } from "./DeletedCards.styled";
import { RiRecycleFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function DeletedCards() {
  const { deletedNotes, setDeletedNotes, theme, setTheme, setNotes, notes } =
    useContext(AppContext);
  var time = new Date();

  //* Remove from recently deleted
  const handleDeleteDeleted = (param: any) => {
    //remove note from deleted
    // param is the "clicked-on" card id(check where function is called)
    axios
      .put("API/completely-delete", {
        userId: localStorage.getItem("iNotesUserId"),
        currentNoteId: param,
      })
      .catch((err) => console.log(err));

    //delete note locally
    let filtered = deletedNotes.filter((item: any) => item._id !== param);
    setDeletedNotes(filtered);
  };

  //* Recover Note from deleted
  const handleRecoverNote = (
    id: string,
    currentFolder: string,
    singleNoteTxt: string,
    noteTitle: string,
    date: any,
    folderName: string
  ) => {
    //remove note on server
    axios
      .put("API/recover-note", {
        folderName: currentFolder,
        noteText: singleNoteTxt,
        noteTitle: noteTitle,
        date: date,
        pinnedState: false,
        userId: localStorage.getItem("iNotesUserId"),
        timestamp: time,
        _id: id,
        currentNoteId: id,
        lockedState: false,
      })
      .catch((err) => {
        console.log(err);
      });

    //remove notes locally
    let filtered = deletedNotes.filter((item: any) => item._id !== id);
    setDeletedNotes(filtered);
    setNotes([
      ...notes,
      {
        folder: folderName,
        noteText: singleNoteTxt,
        noteTitle: singleNoteTxt?.split(" ").slice(0, 2).join(" "),
        date: new Date().toLocaleDateString(),
        pinnedState: false,
        userId: localStorage.getItem("iNotesUserId"),
        timestamp: time,
        _id: id,
        lockedState: false,
      },
    ]);

    //call delete function
    handleDeleteDeleted(id);
  };

  //*Toggle Theme Function
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light"
      ? localStorage.setItem("iNotesLightSettings", "dark")
      : localStorage.setItem("iNotesLightSettings", "light");
  };

  useEffect(() => {
    Aos.init({
      duration: 400,
    });
  }, []);

  return (
    <StyledDeletedCards theme={theme}>
      <div className="top row btw" data-aos="fade-down">
        <Link to="/">
          <FaAngleLeft style={{ fontWeight: "800" }} />
          Recently Deleted
        </Link>
        <CgDarkMode
          style={{ fontSize: "2rem" }}
          onClick={toggleTheme}
          className="pointer"
        />
      </div>

      <div className="top-2">
        <p>Notes are deleted after a period of time</p>
      </div>

      <div className="del-cards">
        {deletedNotes?.map((data: any) => {
          return (
            <div key={data._id} className="normal-card">
              <div className="row btw">
                <Tippy content="Recover">
                  <span
                    className="pointer"
                    onClick={() =>
                      handleRecoverNote(
                        data._id,
                        data.folder,
                        data.noteText,
                        data.noteTitle,
                        data.date,
                        data.folderName
                      )
                    }
                  >
                    <RiRecycleFill />
                  </span>
                </Tippy>

                <Tippy content="Delete">
                  <span
                    className="pointer"
                    onClick={() => handleDeleteDeleted(data._id)}
                  >
                    <MdDelete />
                  </span>
                </Tippy>
              </div>
              <DeletedCard {...data} />
            </div>
          );
        })}
      </div>

      {deletedNotes?.length === 0 && (
        <h3
          style={{
            margin: "auto",
            color: "#7e8a8c",
            textAlign: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          No Deleted Notes
        </h3>
      )}
    </StyledDeletedCards>
  );
}

export default DeletedCards;

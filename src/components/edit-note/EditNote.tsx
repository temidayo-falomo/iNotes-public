import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FcLock } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import { AppContext } from "../../helper/Context";
import { StyledEditNote } from "./EditNote.styled";

function EditNote() {
  const {
    theme,
    rowSelectCard,
    rowCardClicked,
    notes,
    setNotes,
    rowNoteNumber,
    listView,
    user,
  } = useContext(AppContext);

  //local state for downward's row single note(gotten by its id || index)
  const [singleRowNote, setSingleRowNote] = useState(
    notes?.find(
      (x: any) => x._id === rowSelectCard || x.noteIdx === rowNoteNumber
    )
  );
  const [showRowPasswordBox, setShowRowPasswordBox] = useState<boolean>(false);
  const [rowPasswordVal, setRowPasswordVal] = useState<string>("");
  const [rowPasswordCorrect, setRowPasswordCorrect] = useState<string>("");

  //useeffect to trigger change from "row-card" component
  //? Weird Behavior(States are suppoosed to auto-update)
  useEffect(() => {
    setSingleRowNote(
      notes?.find(
        (x: any) => x._id === rowSelectCard || x.noteIdx === rowNoteNumber
      )
    );
  }, [rowNoteNumber, rowCardClicked, listView]);

  //
  useEffect(() => {
    setSingleRowNote(
      notes?.find(
        (x: any) => x._id === rowSelectCard || x.noteIdx === rowNoteNumber
      )
    );
    setRowPasswordVal("");
    setRowPasswordCorrect("");
  }, [showRowPasswordBox]);

  useEffect(() => {
    setShowRowPasswordBox(false);
  }, [singleRowNote]);

  return (
    <StyledEditNote theme={theme}>
      {!singleRowNote?.locked ? (
        <textarea
          name=""
          id=""
          placeholder="Pick Note to Edit..."
          value={singleRowNote?.noteText}
          onChange={(e) => {
            setSingleRowNote(e.target.value);
            localStorage.setItem(
              "iNotesRowEditNoteObject",
              JSON.stringify({
                iNotesRowCurrentEditNote: e.target.value,
                editedRowNote: true,
              })
            );

            var time = new Date();

            setNotes((current: any) =>
              current.map((obj: any) => {
                if (obj._id === rowSelectCard) {
                  return {
                    ...obj,
                    noteText: e.target.value,
                    noteTitle: e.target.value.split(" ").slice(0, 2).join(" "),
                    timestamp: time,
                  };
                }
                return obj;
              })
            );
          }}
        ></textarea>
      ) : (
        <div
          style={{
            margin: "auto",
            color: "#7e8a8c",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            textAlign: "center",
            fontSize: "4rem",
            cursor: "pointer",
          }}
        >
          {showRowPasswordBox ? (
            <div className="mod-box col">
              <div className="top btw row center">
                <h4>Enter Password.</h4>
                <MdOutlineCancel onClick={() => setShowRowPasswordBox(false)} />
              </div>

              <form
                className="row center gap-5"
                onSubmit={(e) => {
                  e.preventDefault();

                  if (rowPasswordVal === user?.password) {
                    //unlock locally
                    setNotes((current: any) =>
                      current.map((obj: any) => {
                        if (
                          obj._id ===
                            localStorage.getItem("iNotesRowEditNoteId") ||
                          obj.noteIdx === rowNoteNumber
                        ) {
                          return {
                            ...obj,
                            locked: false,
                          };
                        }
                        return obj;
                      })
                    );
                    setShowRowPasswordBox(false);
                  } else if (
                    localStorage.getItem("iNotesUserId") === "guest-id"
                  ) {
                    setRowPasswordCorrect(
                      "You need to login to use this feature"
                    );
                  } else if (!user?.password) {
                    setRowPasswordCorrect(
                      "You can't access locked notes while offline."
                    );
                  } else {
                    setRowPasswordCorrect("Incorrect Pin!");
                  }
                }}
              >
                <input
                  type="text"
                  placeholder="Enter Password..."
                  value={rowPasswordVal}
                  onChange={(e) => setRowPasswordVal(e.target.value)}
                />
                <button>Ok</button>
              </form>
              <span style={{ fontSize: "0.8rem" }}>{rowPasswordCorrect}</span>
            </div>
          ) : (
            <FcLock onClick={() => setShowRowPasswordBox(true)} />
          )}
        </div>
      )}
    </StyledEditNote>
  );
}

export default EditNote;

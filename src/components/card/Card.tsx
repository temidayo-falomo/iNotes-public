import axios from "axios";
import React, { useContext } from "react";
import { BsFillPinFill } from "react-icons/bs";
import { FcLock } from "react-icons/fc";
import { AppContext } from "../../helper/Context";
import { StyledCard } from "./Card.styled";

function Card(props: any) {
  const { theme, notes, setNotes, noteIdx } = useContext(AppContext);

  //*Unpin Note
  const handleUnpin = () => {
    axios
      .put("API/unpin-note", {
        userId: localStorage.getItem("iNotesUserId"),
        index: localStorage.getItem("iNotesEditNoteIndex"),
        pinnedState: false,
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
            pinned: false,
          };
        }
        return obj;
      })
    );
  };

  return (
    <StyledCard theme={theme}>
      {notes?.some(() => props.pinned === true) ? (
        <div className="pinned-box" onClick={handleUnpin}>
          <BsFillPinFill />
        </div>
      ) : (
        ""
      )}
      <h3>{props?.noteTitle}</h3>
      {notes?.some(() => props.locked === true) ? (
        <FcLock className="lock-icon" />
      ) : (
        <p>{props?.noteText}</p>
      )}
    </StyledCard>
  );
}

export default Card;

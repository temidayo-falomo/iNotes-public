import axios from "axios";
import React, { useContext } from "react";
import { BsFillPinFill, BsFolder2 } from "react-icons/bs";
import { FcLock } from "react-icons/fc";
import { AppContext } from "../../helper/Context";
import { StyledRowCard } from "./RowCard.styled";

function RowCard(props: any) {
  const { theme, notes, setNotes, rowNoteNumber } = useContext(AppContext);

  //* Unpin Note
  const handleUnpin = () => {
    //unpin note on mongoDb
    axios
      .put("API/unpin-note", {
        userId: localStorage.getItem("iNotesUserId"),
        index: localStorage.getItem("iNotesRowEditNoteIndex"),
        pinnedState: false,
      })
      .catch((err) => console.log(err));

    //unpin note locally
    setNotes((current: any) =>
      current.map((obj: any) => {
        if (
          obj._id === localStorage.getItem("iNotesRowEditNoteId") ||
          obj.noteIdx === rowNoteNumber
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
    <StyledRowCard theme={theme}>
      {notes.some(() => props.pinned === true) ? (
        <div className="pinned-box pointer" onClick={handleUnpin}>
          <BsFillPinFill />
        </div>
      ) : (
        ""
      )}
      <div className="col">
        <h3>{props?.noteTitle}</h3>
        <div className="row gap-5">
          <div>{props?.date}</div>
          {notes?.some(() => props.locked === true) ? (
            <FcLock className="lock-icon" />
          ) : (
            <div>{props?.noteText.slice(0, 20)}...</div>
          )}
        </div>
        <p className="gap-5 st row">
          <BsFolder2 />
          {props?.folder}
        </p>
      </div>
    </StyledRowCard>
  );
}

export default RowCard;

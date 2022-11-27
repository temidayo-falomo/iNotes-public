import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../helper/Context";
import { StyledWriteNote } from "./WriteNote.styled";

function WriteNote() {
  //Local x Global variables
  const noteId = useParams().id;
  const { theme, setSingleNoteTxt, notes, noteIdx } = useContext(AppContext);
  const [singleNote, setSingleNote] = useState(
    notes?.find((x: any) => x._id === noteId || x.noteIdx === noteIdx)
  );

  useEffect(() => {
    setSingleNoteTxt(
      notes?.find((x: any) => x._id === noteId || x.noteIdx === noteIdx)
        ?.noteText
    );
  }, []);

  return (
    <StyledWriteNote theme={theme}>
      <textarea
        name=""
        id=""
        placeholder="Edit Noterr"
        value={singleNote?.noteText}
        onChange={(e) => {
          setSingleNote(e.target.value);
          setSingleNoteTxt(e.target.value);

          localStorage.setItem(
            "iNotesEditNoteObject",
            JSON.stringify({
              iNotesCurrentEditNote: e.target.value,
              editedNote: true,
            })
          );
        }}
      ></textarea>
    </StyledWriteNote>
  );
}

export default WriteNote;

import React, { useContext, useState } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { MdArrowDropDown } from "react-icons/md";
import ActivityBar from "../../components/activity-bar/ActivityBar";
import Leftbar from "../../components/leftbar/Leftbar";
import { AppContext } from "../../helper/Context";
import { StyledCreateNote } from "./CreateNote.styled";

function CreateNote() {
  const {
    theme,
    setWritingNote,
    setLeftbarDisplay,
    currentFolder,
    leftBarDisplay,
    folderNames,
    setCurrentFolder,
  } = useContext(AppContext);

  const [dropdownShow, setDropdownShow] = useState<boolean>(false);
  const [activeDrop, setActiveDrop] = useState<number>(0);

  return (
    <StyledCreateNote theme={theme}>
      <Leftbar />
      <div className="col holder">
        <ActivityBar />
        <div className="curr-folder-info-cr">
          <h4
            className="row center gap-5 pointer"
            onClick={() => {
              if (window.innerWidth < 780) {
                setLeftbarDisplay(!leftBarDisplay);
              } else {
                setDropdownShow(!dropdownShow);
              }
            }}
          >
            <FcOpenedFolder /> {currentFolder}{" "}
            <MdArrowDropDown className="dropdown-btn" />
          </h4>

          <div className={dropdownShow ? "droppy" : "droppy droppy-inactive"}>
            {folderNames?.map((data: any, index: any) => {
              return (
                <div
                  className={`drop-option pointer ${
                    activeDrop === index && "option-active"
                  }`}
                  key={data._id}
                  onClick={() => {
                    setCurrentFolder(data.folderName);
                    setActiveDrop(index);
                  }}
                >
                  <FcOpenedFolder />
                  {data.folderName}
                </div>
              );
            })}
          </div>
        </div>
        <div className="write-note-cr">
          <textarea
            name=""
            id=""
            placeholder="Write Note"
            onChange={(e) => {
              setWritingNote(e.target.value);
              localStorage.setItem(
                "iNotesNotesObject",
                JSON.stringify({
                  iNotesCurrentNote: e.target.value,
                  newNote: true,
                })
              );
            }}
          ></textarea>
        </div>
      </div>
    </StyledCreateNote>
  );
}

export default CreateNote;

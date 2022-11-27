import React, { useContext, useState } from "react";
import { StyledLeftbar } from "./Leftbar.styled";
import { BsFolder2 } from "react-icons/bs";
import {
  AiFillDelete,
  AiFillSetting,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { AppContext } from "../../helper/Context";
import Option from "./Option";
import { useNavigate } from "react-router-dom";

function Leftbar() {
  const {
    theme,
    setCurrentFolder,
    setShowAddFolderModal,
    folderNames,
    leftBarDisplay,
    setLeftbarDisplay,
    deletedNotes,
    notes,
    updateRowViewNote,
  } = useContext(AppContext);

  //local states x variables
  let navigate = useNavigate();
  const [activeIco, setActiveIco] = useState<any>("disp");

  return (
    <StyledLeftbar
      theme={theme}
      leftBarDisplay={leftBarDisplay}
      setLeftbarDisplay={setLeftbarDisplay}
    >
      <div className="top">
        <div
          style={{ padding: "10px" }}
          className={`row btw center option ${
            activeIco === -1 && "option-active"
          }`}
          onClick={() => setActiveIco(-1)}
        >
          <div className="row center gap-5">
            <BsFolder2 />
            <h5>Quick</h5>
          </div>

          <span>
            {
              notes?.filter((val: any) => {
                return val.folder === val.folderName;
              }).length
            }
          </span>
        </div>

        <div className="icloud">
          <p>iCloud</p>
        </div>

        <div className="col all-opts">
          {folderNames?.map((data: any, index: any) => {
            return (
              <div
                key={index}
                className={`row btw center option ${
                  activeIco === index && "option-active"
                }`}
                onClick={() => {
                  setActiveIco(index);
                  setCurrentFolder(data.folderName);
                  // navigate("/");
                }}
              >
                <Option {...data} index={index} />
              </div>
            );
          })}
        </div>

        <div
          style={{ padding: "10px" }}
          className={`row btw center option del ${
            activeIco === -2 && "option-active"
          }`}
          onClick={() => {
            setActiveIco(-2);
            navigate("/deleted");
            updateRowViewNote();
          }}
        >
          <div className="row center gap-5">
            <AiFillDelete />
            <h5>Recently Deleted</h5>
          </div>

          <span>{deletedNotes?.length}</span>
        </div>

        <div
          style={{ padding: "10px" }}
          className={`row btw center option del ${
            activeIco === -3 && "option-active"
          }`}
          onClick={() => {
            setActiveIco(-3);
            navigate("/settings");
            updateRowViewNote();
          }}
        >
          <div className="row center gap-5">
            <AiFillSetting />
            <h5>Settings</h5>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div
          className="row gap-5 pointer"
          onClick={() => setShowAddFolderModal(true)}
        >
          <AiOutlinePlusCircle />
          <h5>New Folder</h5>
        </div>
      </div>
    </StyledLeftbar>
  );
}

export default Leftbar;

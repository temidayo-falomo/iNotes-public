import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../helper/Context";
import { StyledCreateFolder } from "./CreateFolder.styled";
import Aos from "aos";
import "aos/dist/aos.css";

function CreateFolder() {
  const { setShowAddFolderModal, setFolderNames, folderNames } =
    useContext(AppContext);
  const [nameVal, setNameVal] = useState<string>("");
  const [nameExists, setNameExists] = useState<boolean>(false);

  //ADD FOLDER
  const addFolder = () => {
    if (
      !folderNames.some((e: any) => e.folderName === nameVal) &&
      nameVal !== ""
    ) {
      //add folder locally
      setFolderNames([
        ...folderNames,
        {
          folderName: nameVal,
          userId: localStorage.getItem("iNotesUserId"),
        },
      ]);
      //add folder on mongoDb
      axios
        .post("API/add-folder", {
          currentFoldername: nameVal,
          userId: localStorage.getItem("iNotesUserId"),
        })
        .catch((err) => console.log(err));

      //if folder name exists state is set to true & error pops up on frontend.
      setNameExists(false);

      //folder goes away last after function is run.
      setShowAddFolderModal(false);
    } else {
      setNameExists(true);
    }
  };

  //AOS
  useEffect(() => {
    Aos.init({
      duration: 400,
    });
  }, []);

  return (
    <StyledCreateFolder>
      <div className="modal-box col" data-aos="zoom-in">
        {nameExists && (
          <span
            style={{ color: "orange", position: "absolute", bottom: "2rem" }}
          >
            Folder Name Already Exists!
          </span>
        )}
        <div className="row">
          <h5>New Folder</h5>
        </div>
        <div className="row center gap-5">
          <span>Name:</span>
          <input
            type="text"
            value={nameVal}
            onChange={(e) => setNameVal(e.target.value)}
            placeholder="New Folder"
          />
        </div>

        <div className="row"></div>

        <div className="btm row flex-end">
          <button
            className="cancel"
            onClick={() => setShowAddFolderModal(false)}
          >
            Cancel
          </button>
          <button
            className={nameVal === "" ? "ok" : "ok-active"}
            onClick={addFolder}
          >
            Ok
          </button>
        </div>
      </div>
    </StyledCreateFolder>
  );
}

export default CreateFolder;

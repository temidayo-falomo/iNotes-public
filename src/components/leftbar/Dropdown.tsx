import axios from "axios";
import React, { useContext, useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { AppContext } from "../../helper/Context";

function Dropdown(props: any) {
  const { currentFolder, folderNames, setFolderNames } = useContext(AppContext);
  const [showDropdown, setShowDropdown] = useState(true);

  //* Delete Folder
  const handleDeleteFolder = () => {
    //function is surrounded by if statement that determines what foolders are restricted to deletion.
    if (currentFolder !== "All iCloud") {
      //delete on mongoDb
      axios
        .put("API/delete-folder", {
          userId: localStorage.getItem("iNotesUserId"),
          folderName: currentFolder,
        })
        .catch((err) => console.log(err));

      //delete locally
      let filtered = folderNames.filter(
        (item: any) => item.folderName !== currentFolder
      );
      setFolderNames(filtered);
    }
  };

  return (
    <div className="round-ico">
      {
        <AiOutlineEllipsis
          className="ico-ro"
          onClick={() => setShowDropdown(!showDropdown)}
        />
      }
      {!showDropdown && (
        <div className={`dropdown col gap-5`}>
          <span>Add Folder</span>
          <span onClick={handleDeleteFolder}>Delete</span>
        </div>
      )}
    </div>
  );
}

export default Dropdown;

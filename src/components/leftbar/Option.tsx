import React, { useContext, useState } from "react";
import { BsFolder2 } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../helper/Context";
import Dropdown from "./Dropdown";

function Option(props: any) {
  let navigate = useNavigate();
  let location = useLocation();

  const { notes } = useContext(AppContext);

  const [isHovering, setIsHovering] = useState<any>(false);

  //* To Know when mouse hovers
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  //* To Know when Mouse Leaves
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  //* Handle Click On 
  const handleClick = (folderName: string) => {
    localStorage.setItem("iNotesOption", folderName);

    if (location.pathname === "/deleted") {
      navigate("/");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        padding: "10px",
      }}
      className="btw"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={() => handleClick(props?.folderName)}
    >
      <div className="row center gap-5">
        <BsFolder2 />
        <h5 className="" style={{ minWidth: "70px" }}>
          {props?.folderName}
        </h5>
      </div>

      <div className="row btw gap-1">
        {isHovering && (
          <div
            onMouseOver={handleMouseOver}
            style={{ position: "relative", zIndex: "999999" }}
          >
            <Dropdown />
          </div>
        )}

        <span>
          {props.folderName !== "All iCloud"
            ? notes.filter((val: any) => {
                return val.folder === props.folderName;
              }).length
            : notes?.length}
        </span>
      </div>
    </div>
  );
}

export default Option;

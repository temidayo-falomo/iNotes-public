import React, { useContext } from "react";
import { FcFolder } from "react-icons/fc";
// import { TfiAngleLeft } from "react-icons/tfi";
import { AppContext } from "../../helper/Context";
import ActivityBar from "../activity-bar/ActivityBar";
import AlertBox from "../alert-box/AlertBox";
import Cards from "../cards/Cards";
import EditNote from "../edit-note/EditNote";
import RowList from "../row-list/RowList";
import { StyledMain } from "./Main.styled";

function Main() {
  const { listView, leftBarDisplay, setLeftbarDisplay, currentFolder, theme } =
    useContext(AppContext);

  return (
    <StyledMain theme={theme}>
      <ActivityBar />
      <div className="curr-folder-info">
        <h4
          className="row center gap-5 pointer"
          onClick={() => setLeftbarDisplay(!leftBarDisplay)}
        >
          <FcFolder /> {currentFolder}
        </h4>
      </div>
      {/* <div className="pinned col">
        <h2>Pinned</h2>

        <div className="pinned-cards">

        </div>
      </div> */}
      {listView ? (
        <Cards />
      ) : (
        <div className="grid-row">
          <RowList />
          <EditNote />
        </div>
      )}

      {!localStorage.getItem("iNotesUserId") ||
        (localStorage.getItem("iNotesUserId") === "guest-id" && <AlertBox />)}
    </StyledMain>
  );
}

export default Main;

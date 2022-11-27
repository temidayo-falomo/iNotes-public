import React, { useContext, useEffect } from "react";
import ActivityBar from "../../components/activity-bar/ActivityBar";
import Leftbar from "../../components/leftbar/Leftbar";
import WriteNote from "../../components/write-note/WriteNote";
import { AppContext } from "../../helper/Context";
import { StyledSingleNote } from "./SingleNote.styled";

function SingleNote() {
  const { setLeftbarDisplay } = useContext(AppContext);

  //GET CURRENT WITDTH OF SCREEN AND SET LEFTBAR ACCORDINGLY
  useEffect(() => {
    //TODO : Is it possible to mix css with styled components. Do this?
    if (window.innerWidth < 630) {
      setLeftbarDisplay(false);
    } else {
      setLeftbarDisplay(true);
    }
  }, [window.innerWidth]);

  return (
    <StyledSingleNote>
      <Leftbar />
      <div className="col holder">
        <ActivityBar />
        <WriteNote />
      </div>
    </StyledSingleNote>
  );
}

export default SingleNote;

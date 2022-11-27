import React from "react";
import { StyledError } from "./Error.styled";

function Error() {
  return (
    <StyledError>
      <div className="oops">
        <h2>Oops!</h2>
      </div>
    </StyledError>
  );
}

export default Error;

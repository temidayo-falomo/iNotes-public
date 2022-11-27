import React from "react";
import DeletedCards from "../../components/deleted-cards/DeletedCards";
import { StyledRecentlyDeleted } from "./RecentlyDeleted.styled";

function RecentlyDeleted() {
  return (
    <StyledRecentlyDeleted>
      <DeletedCards />
    </StyledRecentlyDeleted>
  );
}

export default RecentlyDeleted;

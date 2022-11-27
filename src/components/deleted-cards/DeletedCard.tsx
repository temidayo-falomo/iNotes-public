import React, { useContext } from "react";
import { AppContext } from "../../helper/Context";
import { StyledDeletedCard } from "./DeletedCard.styled";

function DeletedCard(props: any) {
  const { theme } = useContext(AppContext);
  return (
    <StyledDeletedCard theme={theme}>
      <h3>{props?.noteTitle}</h3>
      <p>{props?.noteText}</p>
    </StyledDeletedCard>
  );
}

export default DeletedCard;

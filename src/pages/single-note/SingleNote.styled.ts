import styled from "styled-components";

export const StyledSingleNote = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  height: 100vh;

  .holder {
    overflow: auto;
  }

  @media (max-width: 630px) {
    display: flex;
  }
`;

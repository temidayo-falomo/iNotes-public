import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
  width: auto;
  transition: 0.5s ease;
  position: relative;

  .grid-row {
    display: grid;
    grid-template-columns: 300px auto;
    height: 95vh;
    overflow: hidden;

  }

  .curr-folder-info {
    padding: 5px;
    margin: 1rem;
    margin-bottom: 0;
    display: none;
  }

  .pinned {
    border: 2px red solid;
    padding: 20px;
  }

  @media (max-width: 735px) {
    .curr-folder-info {
      display: flex;
    }

    .grid-row {
      display: flex;
      min-width: 300px;
    }
  }
`;

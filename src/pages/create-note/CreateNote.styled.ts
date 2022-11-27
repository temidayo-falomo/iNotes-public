import styled from "styled-components";

export const StyledCreateNote = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  height: 100vh;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#212424"};
  color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
  overflow: hidden;

  .holder {
    overflow: auto;
  }

  .curr-folder-info-cr {
    padding: 8px;
    padding-top: 20px;
    padding-left: 18px;
    margin-left: 0;
    margin-bottom: 0;
    font-size: 1.3rem;
    position: relative;

    /* overflow: visible; */
  }

  .write-note-cr {
    height: 95vh;
    width: 100%;
    padding: 20px;
    transition: 0.5s ease;
    overflow: auto;

    /* background-color: ${(props: any) =>
      props.theme === "light" ? "#fff" : "#212424"};
    color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")}; */

    textarea {
      border: none;
      outline: none;
      background-color: transparent;
      color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
      font-size: 1.5rem;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  .droppy {
    min-width: 180px;
    background-color: ${(props: any) =>
      props.theme === "light" ? "#fff" : "#000"};

    position: absolute;
    z-index: 9909;
    transition: 0.5s ease;
    top: 3.5rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    overflow: hidden;
    gap: 0.5rem;
    height: 150px;
    overflow-y: auto;
    padding-top: 8px;
    padding-bottom: 8px;

    .drop-option {
      font-size: 0.8rem;
      padding: 8px;
      padding-left: 24px;
      display: flex;
      align-items: center;
      font-weight: 500;
      gap: 0.5rem;

      :hover {
        background-color: ghostwhite;
        color: ${(props: any) =>
          props.theme === "light" ? "#212424" : "#000"};
      }
    }

    .drop-option.option-active {
      background-color: aliceblue;
      color: ${(props: any) => (props.theme === "light" ? "#212424" : "#000")};
    }
  }

  .droppy.droppy-inactive {
    height: 0;
    padding: 0 5px;
  }

  @media (max-width: 780px) {
    display: flex;

    .dropdown-btn {
      display: none;
    }
  }
`;

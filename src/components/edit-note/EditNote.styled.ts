import styled from "styled-components";

export const StyledEditNote = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  position: relative;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#212424"};
  transition: 0.5s ease;
  overflow: auto;

  .mod-box {
    /* width: 280px; */
    background-color: #232625;
    border-radius: 10px;
    padding: 10px;
    gap: 0.5rem;

    .top {
      font-size: 1.5rem;
      color: #fff;
    }

    input {
      padding: 5px;
      border-radius: 5px;
      border: none;
      width: 100%;
    }

    button {
      padding: 8px;
      border-radius: 5px;
    }
  }

  textarea {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1.5rem;
    height: 85%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
    padding-bottom: 3rem;
    padding-top: 1rem;
  }

  @media (max-width: 750px) {
    textarea {
      font-size: 1rem;
    }
  }
`;

import styled from "styled-components";

export const StyledWriteNote = styled.div`
  height: 95vh;
  width: 100%;
  padding: 20px;
  transition: 0.5s ease;

  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#212424"};
  color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};

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

`;

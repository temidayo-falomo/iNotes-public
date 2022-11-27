import styled from "styled-components";

export const StyledNotes = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  height: 100vh;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#212424"};
  color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
  transition: 0.5s ease;

  @media (max-width: 630px) {
    display: flex;
  }
`;

import styled from "styled-components";

export const StyledDeletedCard = styled.div`
  cursor: pointer;
  text-align: left;
  transition: 0.5s ease;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#1e1e1e"};
  color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};

  p {
    line-height: 1rem;
    margin-top: 0.8rem;
    font-size: 0.8rem;
  }
`;

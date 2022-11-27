import styled from "styled-components";

export const StyledRowList = styled.div`
  background: #252a2b;
  backdrop-filter: blur(3.6px);
  -webkit-backdrop-filter: blur(3.6px);
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 95vh;
  overflow-y: auto;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#212424"};
  color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
  transition: 0.5s ease;
  border: ${(props: any) =>
    props.theme === "light" ? "1px #E7E7E7 solid" : "1px #323232 solid"};
  border-top: none;
  border-bottom: none;
  border-left: none;
  padding-bottom: 5rem;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0.2em;
  }

  .normal-rowcard {
    /* overflow-x: hidden; */
  }

  .rowcard-active {
    /* background-color: #f2ba4b; */
    border-radius: 10px;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px #f2ba4b solid;

    .col {
      border: none !important;
    }
  }

  @media (max-width: 735px) {
    width: 350px;
  }
`;

// 323232;

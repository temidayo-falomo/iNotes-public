import styled from "styled-components";

export const StyledRowCard = styled.div`
  padding: 10px 20px;
  position: relative;

  .col {
    border-bottom: ${(props: any) =>
      props.theme === "light" ? "1px #E7E7E7 solid" : "1px #323232 solid"};
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    font-size: 0.8rem;
    cursor: pointer;
    padding-bottom: 0.5rem;
    overflow: auto;
  }

  .pinned-box {
    background-color: ${(props: any) =>
      props.theme === "light" ? "#e0e1e2" : "#707172"};
    color: ${(props: any) => (props.theme === "light" ? "#707172" : "#e0e1e2")};
    width: 30px;
    display: grid;
    place-content: center;
    font-size: 1rem;
    padding: 5px;
    border-radius: 5px;
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    z-index: 9999;
    transition: 0.5s ease;
  }

  @media (max-width: 735px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .row {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
    }

    .st {
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 0.2rem;
    }
  }
`;

import styled from "styled-components";

export const StyledCard = styled.div`
  height: 170px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  text-align: left;
  color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
  position: relative;

  p {
    line-height: 1rem;
    margin-top: 0.8rem;
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

  .lock-icon {
    font-size: 2.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

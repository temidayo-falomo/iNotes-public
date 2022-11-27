import styled from "styled-components";

export const StyledPasswordBox = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  place-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99999;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);

  .red {
    color: red;
  }

  .cancel {
    font-size: 2rem;
    cursor: pointer;

    :hover {
      color: red;
    }
  }

  .modal-box {
    background-color: #242625;
    width: 300px;
    border: 1px #505050 solid;
    border-radius: 10px;
    padding: 20px;
    justify-content: space-between;
    position: relative;
    color: #fff;

    .top {
      margin-bottom: 1rem;
      font-size: 1.1rem;

      h3 {
        text-align: left;
      }
    }

    .mid {
      margin-bottom: 1rem;

      input {
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        border: none;
      }
      button {
        padding: 7px 10px;
        border-radius: 5px;
        background-color: #f2ba4b;
        color: #fff;
      }
    }
  }
`;

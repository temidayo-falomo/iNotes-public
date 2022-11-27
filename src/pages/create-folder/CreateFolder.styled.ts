import styled from "styled-components";

export const StyledCreateFolder = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  place-content: center;
  position: absolute;
  z-index: 99999;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);

  .modal-box {
    background-color: #242625;
    width: 480px;
    height: 180px;
    border: 1px #505050 solid;
    border-radius: 10px;
    padding: 20px;
    justify-content: space-between;
    position: relative;

    h5 {
      font-size: 1rem;
    }

    span {
      font-size: 0.8rem;
    }

    input {
      border: none;
      border-radius: 5px;
      padding: 5px;
      max-width: 400px;
      width: 400px;
      background-color: transparent;
      border: 1px #aea865 solid;
      outline: 1px #aea865 solid;
      color: #fff;
    }

    .cancel {
      background-color: #5b5d5c;
      color: #fff;
    }

    .ok {
      background-color: #3e403f;
      color: #717372;
      cursor: not-allowed;
      z-index: -1;
      position: relative;
      
    }

    .ok-active {
      background-color: orange;
      color: #fff;
    }

    .flex-end {
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      border-top: 1px #3a3c3b solid;
      padding-top: 1rem;

      button {
        padding: 5px 20px;
        border-radius: 5px;
      }
    }
  }

  @media (max-width: 560px) {
    .modal-box {
      width: 80vw;
      min-width: 300px;
    }
  }
`;

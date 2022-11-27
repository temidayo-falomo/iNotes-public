import styled from "styled-components";

export const StyledSettings = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#212424"};
  color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
  transition: 0.5s ease;

  .default {
    color: ${(props: any) => (props.theme === "light" ? "#9b9c9c" : "#fff")};
    font-size: 0.8rem;
  }

  .top-bar {
    padding: 20px 0;
    font-size: 1.2rem;

    a {
      color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
    }
  }

  .avatar {
    min-height: 35px;
    min-width: 35px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: gray;
    cursor: pointer;
  }

  .holder {
    margin: 20px;
    width: 300px;
    margin: auto;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    overflow: hidden;

    .top {
      border-bottom: 1px gainsboro solid;
      padding: 10px;
      height: 50px;
      align-items: center;

      input {
        padding: 3px;
        width: 100%;
        border: ${(props: any) =>
          props.theme === "light"
            ? "1px gainsboro solid"
            : "1px #434446 solid"};
        border-radius: 5px;
      }

      button {
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #cbaa45;
        color: #fff;
      }
    }

    .mid {
      /* border: 1px gainsboro solid; */

      .sett {
        padding: 10px;
        cursor: pointer;

        :hover {
          background-color: #cbaa45;
          color: #fff !important;
        }
      }
    }

    .btm {
      border-top: 1px gainsboro solid;
      padding: 10px;
    }
  }
`;

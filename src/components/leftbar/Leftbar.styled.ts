import styled from "styled-components";

export const StyledLeftbar = styled.aside`
  padding: 20px 10px;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  transition: 0.5s ease;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#273335"};
  color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
  position: relative;
  z-index: 9999;
  width: ${(props: any) => (props.leftBarDisplay === true ? "100%" : "0")};
  padding: ${(props: any) =>
    props.leftBarDisplay === true ? "5rem 10px 20px 10px" : "0"};
  min-width: ${(props: any) => (props.leftBarDisplay === true ? "170px" : "0")};
  max-width: ${(props: any) => (props.leftBarDisplay === true ? "200px" : "0")};

  position: relative;

  .dropdown {
    z-index: 999999999;
  }

  .round-ico {
    background-color: #fff;
    border-radius: 50%;
    display: grid;
    place-content: center;
    color: #000;
    position: relative;
    z-index: 9;

    .dropdown {
      width: 90px;
      position: absolute;
      padding: 5px;
      border-radius: 5px;
      background: rgba(71, 71, 72, 30%);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      background-color: ${(props: any) =>
        props.theme === "light" ? "#e1e2e4" : "#273335"};
      right: 0;
      top: 1.3rem;
      z-index: 999999 !important;
      border: 1px #bbbbbb solid;

      span {
        padding: 5px;
        border-radius: 2px;
        color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};

        :hover {
          background-color: #eccd76;
          color: #fff;
          border-radius: 5px;
        }
      }

      span:nth-of-type(1) {
        border-bottom: 1px #c7c8ca solid;
        /* padding-bottom: 0.5rem; */
      }
    }
  }

  .del {
    margin-top: 1rem;
  }

  .option {
    cursor: pointer;
    border-radius: 5px;
    position: relative;
    align-items: center;

    :hover {
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      backdrop-filter: blur(2.5px);
      -webkit-backdrop-filter: blur(2.5px);
    }

    span {
      font-size: 0.8rem;
      color: #7e8a8c;
    }
  }

  .option-active {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    background-color: #cbaa45;
    position: relative;
    z-index: 9;
    color: #fff;

    span {
      color: #fff;
    }
  }

  .icloud {
    margin: 1.5rem 0;
    font-size: 0.8rem;
    color: #687476;
  }

  .all-opts {
    gap: 0.5rem;
  }

  .bottom {
    margin-bottom: 4rem;
    margin-left: 0.5rem;
  }
`;

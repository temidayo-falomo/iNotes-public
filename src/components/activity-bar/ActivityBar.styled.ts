import styled from "styled-components";

export const StyledActivityBar = styled.div`
  padding: 20px;
  width: 100%;
  min-width: 100%;
  position: sticky;
  top: 0;
  font-size: 1.5rem;
  z-index: 9999;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : " rgba(255, 255, 255, 0.06)"};
  color: ${(props: any) => (props.theme === "light" ? "#9b9c9c" : "#fff")};
  transition: 0.5s ease;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.6px);
  -webkit-backdrop-filter: blur(1.6px);

  .red {
    color: red;
  }

  a {
    color: ${(props: any) => (props.theme === "light" ? "#9b9c9c" : "#fff")};
  }

  .activity-nav {
    gap: 2.5rem;
    overflow-x: auto;

    ::-webkit-scrollbar {
      width: 0;
    }
  }

  .pointer-active {
    padding: 8px;
    font-size: 2.5rem;
    border-radius: 10px;
    background-color: #444546;
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

  .last-row {
    input {
      border: ${(props: any) =>
        props.theme === "light" ? "1px gainsboro solid" : "1px #434446 solid"};
      padding: 6px;
      border-radius: 5px;
      background-color: transparent;
      color: ${(props: any) => (props.theme === "light" ? "#000" : "#fff")};
      transition: 0.5s ease;
    }
  }

  .share {
    position: relative;

    .share-dropdown {
      border: ${(props: any) =>
        props.theme === "light" ? "1px gainsboro solid" : "1px #434446 solid"};
      z-index: 999999999;
      position: absolute;
      font-size: 0.8rem;
      border-radius: 10px;
      gap: 0.8rem;
      padding: 8px;

      display: none;

      .opt {
        padding: 5px;
        cursor: pointer;

        :hover {
          background-color: aliceblue;
          border-radius: 5px;
        }
      }

      background: rgba(255, 255, 255, 0.35);
      background-color: #444546;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(15.3px);
      -webkit-backdrop-filter: blur(15.3px);
    }
  }
`;

import styled from "styled-components";

export const StyledLogin = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#212424"};
  color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
  transition: 0.5s ease;

  .box {
    width: 310px;
    min-width: 300px;
    height: 280px;
    border: ${(props: any) =>
      props.theme === "light" ? "1px #212424 solid" : "1px #212424 solid"};
    border-radius: 30px;
    text-align: center;
    align-items: center;
    background-color: ${(props: any) =>
      props.theme === "light" ? "#fff" : "#0B0C0C"};
    color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
    transition: 0.5s ease;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: transparent;
    border: ${(props: any) =>
      props.theme === "light" ? "1px #fff solid" : "1px gainsboro solid"};

    p {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.4rem;
      font-size: 0.9rem;
    }

    button {
      padding: 15px 10px;
      border-radius: 15px;
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      background-color: transparent;
      border: ${(props: any) =>
        props.theme === "light"
          ? "1px gainsboro solid"
          : "1px gainsboro solid"};

      color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
      transition: 0.5s ease;

      :hover {
        /* border: 1px green solid; */
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        transition: 0.5s ease;
      }
    }

    .top-rw {
      align-self: center;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      gap: 0.5rem;

      .pointer {
        font-size: 1.5rem;
      }
    }

    .guest-btn {
      width: 150px;
      margin: 0.5rem auto;
      padding: 8px;
      text-align: center;
      justify-content: center;
      cursor: pointer;
      font-weight: 500;
      margin-bottom: 0.88rem;
      /* border-radius: 5px; */

      :hover {
        /* box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; */
      }
    }
  }
`;

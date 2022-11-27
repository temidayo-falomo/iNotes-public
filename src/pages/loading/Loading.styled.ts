import styled from "styled-components";

export const StyledLoading = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Plus Jakarta Sans", sans-serif;
  }

  height: 100vh;
  display: grid;
  place-content: center;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#212424"};

  img {
    width: 100px;
  }

  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ripple div {
    position: absolute;
    border: 5px solid #000;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }

  /* .abs {
    position: absolute;
    font-size: 5vw;
   
    text-align: center;
    margin: auto;
  } */

  .cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* font-size: 1.2rem; */

    h2 {
    }
  }
`;

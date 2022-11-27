import styled from "styled-components";

export const StyledAlertBox = styled.div`
  background-color: #1bc1ff;
  width: 250px;
  min-width: 200px;
  border-radius: 50px;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 15px 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  z-index: 999999;

  h3 {
    width: 100%;
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 800;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 10px;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    color: #fff;
    border: 1px white solid;
    background-color: transparent;
    color: #fff;
    margin-bottom: 1rem;
  }

  .cancel {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.2rem;
  }

  @media (max-width: 425px) {
    width: 180px;

    h3 {
      font-size: 1rem;
      margin: 0.5rem 0;
    }

    p {
      font-size: 0.7rem;
    }

    button {
      padding: 8px 5px;
      font-size: 0.7rem;
    }
  }
`;

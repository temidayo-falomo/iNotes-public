import styled from "styled-components";

export const StyledDeletedCards = styled.div`
  height: 100vh;
  background-color: ${(props: any) =>
    props.theme === "light" ? "#fff" : "#212424"};
  color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
  transition: 0.5s ease;

  .top {
    padding: 20px;
    margin-bottom: 1rem;
    padding-top: 2rem;

    a {
      font-size: 1.5rem;
      color: ${(props: any) => (props.theme === "light" ? "#212424" : "#fff")};
      display: flex;
      align-items: center;
      font-weight: 600;
    }
  }

  .top-2 {
    margin-bottom: 2rem;
    text-align: center;
  }

  .del-cards {
    display: flex;
    gap: 2rem;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 20px;

    .normal-card {
      border: ${(props: any) =>
        props.theme === "light" ? "1px #E8E8E8 solid" : "1px #323232 solid"};
      border-radius: 10px;
      overflow: hidden;
      align-self: flex-start;
      justify-self: flex-start;
      width: 200px;
      height: 170px;
      overflow: hidden;
      padding: 10px;
      background-color: ${(props: any) =>
        props.theme === "light" ? "#fff" : "#1e1e1e"};
      transition: 0.5s ease;

      .btw {
        margin-bottom: 1rem;

        span {
          background-color: ${(props: any) =>
            props.theme === "light" ? "#fff" : "gray"};
          color: ${(props: any) => (props.theme === "light" ? "gray" : "#fff")};
          border-radius: 30px;
          height: 40px;
          width: 40px;
          display: grid;
          place-content: center;
          font-size: 1.4rem;
          border: ${(props: any) =>
            props.theme === "light"
              ? "1px #E8E8E8 solid"
              : "1px #323232 solid"};
        }
      }
    }
  }

  @media (max-width: 550px) {
    .del-cards {
      justify-content: center;
    }
  }
`;

import styled from "styled-components";

export const StyledCards = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  align-items: center;
  justify-content: flex-start;

  .center {
    text-align: center;
  }

  .gap-5 {
    gap: 0.3rem;
  }

  .col {
    gap: 0.3rem;
    font-size: 0.7rem;
    h3 {
      margin-top: 0.5rem;
      font-weight: 600;
      color: ${(props: any) => (props.theme === "light" ? "#272727" : "#fff")};
    }

    span {
      color: #9b9c9c;
    }

    .gray-ish {
      color: #585a5a;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .cover-card {
    width: 210px;
    overflow: hidden;
  }

  .normal-card {
    border: ${(props: any) =>
      props.theme === "light" ? "1px #E8E8E8 solid" : "1px #323232 solid"};
    border-radius: 10px;
    overflow: hidden;
    align-self: flex-start;
    justify-self: flex-start;
    width: 200px;
    overflow: hidden;
    transition: 0.5s ease;
  }

  .card-active {
    border: 2px #f2ba4b solid;
  }

  @media (max-width: 470px) {
    justify-content: center;

    .cover-card {
      width: 100px;
    }

    .normal-card {
      width: 100px;
      height: 100px;
    }
  }
`;

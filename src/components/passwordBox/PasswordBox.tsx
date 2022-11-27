import React, { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { StyledPasswordBox } from "./PasswordBox.styled";
import Aos from "aos";
import "aos/dist/aos.css";

function PasswordBox(props: any) {
  //AOS
  useEffect(() => {
    Aos.init({
      duration: 400,
    });
    props.setPasswordCorrect("");
  }, []);

  return (
    <StyledPasswordBox>
      <div className="modal-box" data-aos="zoom-in">
        <div className="top btw row center">
          <h3>Enter Password.</h3>
          <MdOutlineCancel
            className="cancel"
            onClick={() => props.setShowPasswordBox(false)}
          />
        </div>
        <form
          className="mid row center gap-5"
          onSubmit={(e) => {
            props.handleSubmitPassword(e);
          }}
        >
          <input
            type="text"
            placeholder="Password..."
            required
            onChange={(e) => props.setPassword(e.target.value)}
          />
          <button>Enter</button>
        </form>
        <div className="red">{props.passwordCorrect}</div>
      </div>
    </StyledPasswordBox>
  );
}

export default PasswordBox;

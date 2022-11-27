import React, { useContext } from "react";
import { StyledAlertBox } from "./AlertBox.styled";
import { TiWarningOutline } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";

function AlertBox() {
  const { setIsAuth, getUser } = useContext(AppContext);
  const navigate = useNavigate();

  //*Sign In Function
  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem("iNotesIsAuth", "true");
        localStorage.setItem("iNotesUserId", res.user.uid);
        localStorage.setItem("iNotesLightSettings", "light");
        setIsAuth(true);

        let userInfo = {
          userId: res.user.uid,
          fullName: res.user.displayName,
          userAvatar: res.user.photoURL,
          notes: [],
          password: "1234",
          folderNames: [
            {
              folderName: "All iCloud",
            },
          ],
        };

        axios
          .post("API/add-user", userInfo)
          .catch((err) => {
            console.log(err);
          });
      })
      .then(() => {
        getUser();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledAlertBox>
      {/* <MdOutlineCancel className="cancel" /> */}
      <TiWarningOutline style={{ fontSize: "3rem", color: "yellow" }} />
      <h3>You Appear to Be Offline, or not Logged In!</h3>
      <p>(This will reduce your general user experience).</p>
      <button className="center row gap-5" onClick={signInWithGoogle}>
        <FcGoogle />
        Continue with Google
      </button>
    </StyledAlertBox>
  );
}

export default AlertBox;

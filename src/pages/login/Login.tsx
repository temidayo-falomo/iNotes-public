import { signInWithPopup } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";
import { StyledLogin } from "./Login.styled";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { CgDarkMode } from "react-icons/cg";
import { TbDoorExit } from "react-icons/tb";

function Login() {
  const { setIsAuth, setLoading, theme, setTheme, getUser } =
    useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false);
  }, []);

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
        localStorage.setItem("iNotesUserId", "");
      })
      .catch((err) => console.log(err));
  };

  const signInAsGuest = () => {
    localStorage.setItem("iNotesIsAuth", "true");
    localStorage.setItem("iNotesUserId", "guest-id");
    localStorage.setItem("iNotesLightSettings", "light");

    navigate("/");

    // window.location.reload();
  };

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light"
      ? localStorage.setItem("iNotesLightSettings", "dark")
      : localStorage.setItem("iNotesLightSettings", "light");
  };

  return (
    <StyledLogin theme={theme}>
      <div className="box grid-center gap">
        <div className="top-rw">
          <h2>Welcome, You!</h2>
          <CgDarkMode className="pointer" onClick={toggleTheme} />
        </div>

        <button onClick={signInWithGoogle} className="row gap-5">
          <FcGoogle style={{ fontSize: "1.3rem" }} />
          Continue with Google
        </button>

        <div className="guest-btn row center gap-5" onClick={signInAsGuest}>
          <TbDoorExit /> Login as Guest
        </div>
        <p>
          This is a one-time, password-less login, so you don't need a password.
        </p>
      </div>
    </StyledLogin>
  );
}

export default Login;

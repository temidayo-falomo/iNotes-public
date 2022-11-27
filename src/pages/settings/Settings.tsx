import React, { useContext, useEffect, useState } from "react";
import { BsFillLockFill, BsUnlockFill } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";
import { StyledSettings } from "./Settings.styled";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

function Settings() {
  const { user, theme, setTheme, setUser } = useContext(AppContext);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");

  //*Function to Toggle Theme.
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light"
      ? localStorage.setItem("iNotesLightSettings", "dark")
      : localStorage.setItem("iNotesLightSettings", "light");
  };

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  return (
    <StyledSettings theme={theme}>
      <div className="top-bar btw row center" data-aos="zoom-in">
        <Link to="/">
          <h3 className="row center">
            <FaAngleLeft style={{ fontWeight: "800" }} />
            Settings
          </h3>
        </Link>
        <CgDarkMode onClick={toggleTheme} className="pointer" />
      </div>

      <div className="holder col gap-1" data-aos="zoom-in">
        <form
          className="top row gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            //Change Password
            axios
              .put("API/change-pin", {
                newPassword,
                userId: localStorage.getItem("iNotesUserId"),
              })
              .catch((err) => console.log(err));

            setNewPassword("");

            setShowForm(false);

            // Add password
            setUser({
              password: newPassword,
            });
          }}
        >
          {showForm ? (
            <>
              <input
                type="search"
                placeholder="Change Pin..."
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button>Change</button>
            </>
          ) : (
            <span className="default">Default Notes Password : 1234</span>
          )}
        </form>
        <div className="mid col gap-5">
          <div
            className="sett row center btw"
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            Change Locked Note Password{" "}
            {!showForm ? <BsFillLockFill /> : <BsUnlockFill />}
          </div>
          <div className="sett btw center row" onClick={toggleTheme}>
            <span>Change Theme</span>
            <span className="cap">{theme}</span>
          </div>
          <div className="sett">Transitions</div>
        </div>
        <div className="btm row center btw">
          <span style={{ textTransform: "lowercase" }}>
            @{auth.currentUser?.displayName}
          </span>

          <div
            className="avatar"
            style={{
              backgroundImage: `url(${auth.currentUser?.photoURL})`,
            }}
          ></div>
        </div>
      </div>
    </StyledSettings>
  );
}

export default Settings;

import React, { useContext, useEffect, useState } from "react";
import { BsFolder2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../helper/Context";
import Card from "../card/Card";
import PasswordBox from "../passwordBox/PasswordBox";
import { StyledCards } from "./Cards.styled";

function Cards() {
  const {
    theme,
    currentFolder,
    notes,
    setUnMountRowView,
    updateRowViewNote,
    searchNotesText,
    setNoteIdx,
    user,
  } = useContext(AppContext);

  //Local States & Variables
  const [number, setNumber] = useState<any>("non");
  //
  const [showPasswordBox, setShowPasswordBox] = useState<boolean>(false);
  const [password, setPassword] = useState("");
  const [passwordCorrect, setPasswordCorrect] = useState<string>("");

  let navigate = useNavigate();

  const handleSubmitPassword = (e: any) => {
    e.preventDefault();

    if (password === user?.password) {
      setPasswordCorrect("Correct Pin");
      if (localStorage.getItem("iNotesEditNoteId") !== undefined) {
        navigate(`/${localStorage.getItem("iNotesEditNoteId")}`);
      } else {
        navigate(`${localStorage.getItem("iNotesEditNoteIndex")}`);
      }
    } else if (localStorage.getItem("iNotesUserId") === "guest-id") {
      setPasswordCorrect("You need to login to use this feature");
    } else if (!user?.password) {
      setPasswordCorrect("You can't access locked notes while offline.");
    } else {
      setPasswordCorrect("Incorrect Pin!");
    }
  };

  //* Function to be called when user clicks on a card.
  const handleCardClick = (index: any, id: any, lockedState: boolean) => {
    //
    setNumber(index);
    setNoteIdx(index);

    //set items to localStorage
    localStorage.setItem("iNotesEditNoteIndex", index);
    localStorage.setItem("iNotesEditNoteId", id);

    if (!lockedState) {
      //delay click for 300 milliseconds
      setTimeout(() => {
        if (id !== undefined) {
          navigate(`/${id}`);
        } else {
          navigate(`${index}`);
        }
      }, 300);
    } else {
      //setsomefunction
      setShowPasswordBox(true);
    }
  };

  //remove "row view" on render
  useEffect(() => {
    setUnMountRowView(true);
    updateRowViewNote();
  }, []);

  return (
    <StyledCards theme={theme}>
      {showPasswordBox && (
        <PasswordBox
          setShowPasswordBox={setShowPasswordBox}
          setPassword={setPassword}
          handleSubmitPassword={handleSubmitPassword}
          passwordCorrect={passwordCorrect}
          setPasswordCorrect={setPasswordCorrect}
        />
      )}
      {notes
        ?.filter((data: any) => {
          if (searchNotesText === "") {
            return data;
          } else if (
            data.noteText
              ?.toLowerCase()
              .includes(searchNotesText?.toLowerCase())
          ) {
            return data;
          }
        })
        ?.filter((data: any) => {
          if (currentFolder === "All iCloud") {
            return data;
          } else if (
            data.folder?.toLowerCase().includes(currentFolder?.toLowerCase())
          ) {
            return data;
          }
        })
        .map((data: any, index: any) => {
          return (
            <div className="col center gap-1 cover-card" key={index}>
              <div
                className={`normal-card ${index === number && "card-active"}`}
                onClick={() => handleCardClick(index, data._id, data.locked)}
              >
                <Card {...data} />
              </div>

              <div className="col">
                <h3>{data?.noteTitle}</h3>
                <span>{data?.date}</span>
                <div className="row center gap-5 gray-ish">
                  <BsFolder2 />
                  {data?.folder}
                </div>
              </div>
            </div>
          );
        })}

      {/* Show "No Notes" Alert */}
      {notes
        ?.filter((data: any) => {
          if (searchNotesText === "") {
            return data;
          } else if (
            data.noteText
              ?.toLowerCase()
              .includes(searchNotesText?.toLowerCase())
          ) {
            return data;
          }
        })
        .filter((data: any) => {
          if (currentFolder === "All iCloud") {
            return data;
          } else if (
            data.folder?.toLowerCase().includes(currentFolder?.toLowerCase())
          ) {
            return data;
          }
        }).length === 0 && (
        <h2
          style={{
            margin: "auto",
            color: "#7e8a8c",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            textAlign: "center",
          }}
        >
          No Notes
        </h2>
      )}
    </StyledCards>
  );
}

export default Cards;

import React, { useContext, useState } from "react";
import {
  AiFillAppstore,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { StyledActivityBar } from "./ActivityBar.styled";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete, MdOutlineIosShare, MdPersonAddAlt1 } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import {
  BsCardList,
  BsFacebook,
  BsPinAngle,
  BsPinAngleFill,
} from "react-icons/bs";
import { AppContext } from "../../helper/Context";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { TfiAngleLeft } from "react-icons/tfi";
import { CgDarkMode } from "react-icons/cg";
import { auth } from "../../firebase/firebase-config";
import axios from "axios";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FcLock, FcUnlock } from "react-icons/fc";

function ActivityBar() {
  const noteId = useParams().id;
  let navigate = useNavigate();
  let location = useLocation();
  var time = new Date();

  const {
    setListView,
    theme,
    setTheme,
    currentFolder,
    singleNoteTxt,
    notes,
    setNotes,
    updateRowViewNote,
    listView,
    searchNotesText,
    setSearchNotesText,
    deletedNotes,
    setDeletedNotes,
    noteIdx,
  } = useContext(AppContext);

  //Local States
  const [activeIco, setActiveIco] = useState(1);
  const [copied, setCopied] = useState(false);

  //*Function to Toggle Theme.
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light"
      ? localStorage.setItem("iNotesLightSettings", "dark")
      : localStorage.setItem("iNotesLightSettings", "light");
  };

  //*Function to Delete Note on server & locally in React.
  const deleteNote = async () => {
    //delete note on server(move to recently deleted)
    axios
      .put("API/delete-note", {
        folderName: currentFolder,
        noteText: singleNoteTxt,
        noteTitle: singleNoteTxt?.split(" ").slice(0, 2).join(" "),
        date: new Date().toLocaleDateString(),
        pinnedState: false,
        userId: localStorage.getItem("iNotesUserId"),
        timestamp: time,
        _id: noteId,
        currentNoteId: noteId,
        lockedState: false,
      })
      .catch((err) => console.log(err));

    //delete note on server(remove from current notes)
    axios
      .put("API/remove-note", {
        userId: localStorage.getItem("iNotesUserId"),
        currentNoteId: noteId,
      })
      .catch((err) => console.log(err));

    //delete note locally
    let filtered = notes.filter((item: any) => item._id !== noteId);
    setNotes(filtered);
    setDeletedNotes([
      ...deletedNotes,
      {
        folderName: currentFolder,
        noteText: singleNoteTxt,
        noteTitle: singleNoteTxt?.split(" ").slice(0, 2).join(" "),
        date: new Date().toLocaleDateString(),
        pinnedState: false,
        userId: localStorage.getItem("iNotesUserId"),
        timestamp: time,
        _id: noteId,
        currentNoteId: noteId,
        lockedState: false,
      },
    ]);

    navigate("/");
  };

  //*Copy Link to clipboard.
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(`https://inotes-mini.netlify.app`);
    setCopied(!copied);
  };

  //*PIN NOTE
  const handlePin = (pinnedState: boolean) => {
    //axios request to pin note on server
    axios
      .put("API/pin-note", {
        userId: localStorage.getItem("iNotesUserId"),
        index: localStorage.getItem("iNotesEditNoteIndex"),
        pinnedState: true,
      })
      .catch((err) => console.log(err));

    //Pin note locally.
    setNotes((current: any) =>
      current.map((obj: any) => {
        if (
          obj._id === localStorage.getItem("iNotesEditNoteId") ||
          obj.noteIdx === noteIdx
        ) {
          return {
            ...obj,
            pinned: true,
          };
        }
        return obj;
      })
    );
  };

  //*Unpin Note
  const handleUnpin = () => {
    //unpin on server
    axios
      .put("API/unpin-note", {
        userId: localStorage.getItem("iNotesUserId"),
        index: localStorage.getItem("iNotesEditNoteIndex"),
        pinnedState: false,
      })
      .catch((err) => console.log(err));

    //unpin locally
    setNotes((current: any) =>
      current.map((obj: any) => {
        if (
          obj._id === localStorage.getItem("iNotesEditNoteId") ||
          obj.noteIdx === noteIdx
        ) {
          return {
            ...obj,
            pinned: false,
          };
        }
        return obj;
      })
    );
  };

  //* Lock Note

  const lockNote = () => {
    axios
      .put("API/lock-note", {
        userId: localStorage.getItem("iNotesUserId"),
        index: localStorage.getItem("iNotesEditNoteIndex"),
      })
      .catch((err) => console.log(err));

    setNotes((current: any) =>
      current.map((obj: any) => {
        if (
          obj._id === localStorage.getItem("iNotesEditNoteId") ||
          obj.noteIdx === noteIdx
        ) {
          return {
            ...obj,
            locked: true,
          };
        }
        return obj;
      })
    );
  };

  const unLockNote = () => {
    //unlock on server-side
    axios
      .put("API/unlock-note", {
        userId: localStorage.getItem("iNotesUserId"),
        index: localStorage.getItem("iNotesEditNoteIndex"),
      })
      .catch((err) => console.log(err));

    //unlock locally
    setNotes((current: any) =>
      current.map((obj: any) => {
        if (
          obj._id === localStorage.getItem("iNotesEditNoteId") ||
          obj.noteIdx === noteIdx
        ) {
          return {
            ...obj,
            locked: false,
          };
        }
        return obj;
      })
    );
  };

  return (
    <StyledActivityBar theme={theme}>
      <div className="activity-nav row center btw">
        <div className="row center gap-1">
          <AiOutlineUnorderedList
            className={`pointer ${activeIco === 0 && "pointer-active"}`}
            onClick={() => {
              setListView(false);
              setActiveIco(0);
              navigate("/");
            }}
          />
          <AiFillAppstore
            className={`pointer ${activeIco === 1 && "pointer-active"}`}
            onClick={() => {
              setListView(true);
              setActiveIco(1);
              navigate("/");
            }}
          />
          {location.pathname !== "/" && (
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TfiAngleLeft className="pointer" />
            </Link>
          )}
        </div>

        <div className="row gap-1 center">
          {location.pathname !== "/" && (
            <MdDelete className="pointer" onClick={deleteNote} />
          )}

          <Link
            to="/create-note"
            onClick={() => {
              if (!listView) {
                updateRowViewNote();
              }
            }}
          >
            <FaRegEdit className="pointer" />
          </Link>

          <CgDarkMode className="pointer" onClick={toggleTheme} />
        </div>

        <div className="row gap-1 center">
          {!notes?.some(
            (e: any) =>
              (e._id === noteId && e.pinned === true) ||
              (e.noteIdx === noteIdx && e.pinned === true)
          ) && (
            <div className="row center">
              {location.pathname !== "/" && (
                <BsPinAngle
                  className="pointer"
                  onClick={() => handlePin(true)}
                />
              )}
            </div>
          )}

          {notes?.some(
            (e: any) =>
              (e._id === noteId && e.pinned === true) ||
              (e.noteIdx === noteIdx && e.pinned === true)
          ) && (
            <div className="row center">
              {location.pathname !== "/" && (
                <BsPinAngleFill className="pointer red" onClick={handleUnpin} />
              )}
            </div>
          )}

          {!notes?.some(
            (e: any) =>
              (e._id === noteId && e.locked === true) ||
              (e.noteIdx === noteIdx && e.locked === true)
          ) && (
            <div className="row center">
              {location.pathname !== "/" && (
                <FcUnlock className="pointer" onClick={lockNote} />
              )}
            </div>
          )}

          {notes?.some(
            (e: any) =>
              (e._id === noteId && e.locked === true) ||
              (e.noteIdx === noteIdx && e.locked === true)
          ) && (
            <div className="row center">
              {location.pathname !== "/" && (
                <FcLock className="pointer" onClick={unLockNote} />
              )}
            </div>
          )}

          <h4 className="pointer">Aa</h4>

          <BsCardList className="pointer" />
        </div>

        <div className="row gap-1 center last-row">
          <Tippy content="Copy Site">
            <div className="row center pointer">
              <FiLink onClick={handleCopyToClipboard} />
            </div>
          </Tippy>
          <a
            href={`mailto:no-one@snai1mai1.com?subject=iNotes Clone&body=You should check out this web app by Temidayo Falomo!`}
            target="_blank"
            rel="noopener noreferrer"
            className="row center"
          >
            <MdPersonAddAlt1 />
          </a>

          <div className="share">
            <MdOutlineIosShare className="pointer" />
            <div className="share-dropdown col">
              <div className="opt row center gap-5">
                <AiFillTwitterCircle />
                Twitter
              </div>
              <div className="opt row center gap-5">
                <BsFacebook />
                Facebook
              </div>
              <div className="opt row center gap-5">
                <AiFillLinkedin />
                LinkedIn
              </div>
            </div>
          </div>

          <div
            className="avatar"
            style={{
              backgroundImage: `url(${auth.currentUser?.photoURL})`,
            }}
          ></div>
          <input
            type="search"
            placeholder="Search Notes"
            className="cap"
            value={searchNotesText}
            onChange={(e) => setSearchNotesText(e.target.value)}
          />
        </div>
      </div>
    </StyledActivityBar>
  );
}

export default ActivityBar;

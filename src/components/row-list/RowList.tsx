import React, { useContext, useState } from "react";
import { AppContext } from "../../helper/Context";
import RowCard from "../row-card/RowCard";
import { StyledRowList } from "./RowList.styled";

function RowList() {
  const {
    theme,
    notes,
    currentFolder,
    setRowSelectCard,
    rowCardClicked,
    setRowCardClicked,
    searchNotesText,
    setRowNoteNumber,
  } = useContext(AppContext);
  const [number, setNumber] = useState<any>(0);

  return (
    <StyledRowList theme={theme}>
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
            data.folder?.toLowerCase().includes(currentFolder.toLowerCase())
          ) {
            return data;
          }
        })
        .map((data: any, index: any) => {
          return (
            <div
              key={index}
              className={`normal-rowcard ${
                index === number && "rowcard-active"
              }`}
              onClick={() => {
                // if (!data.locked) {
                setRowNoteNumber(index);
                setNumber(index);
                setRowCardClicked(!rowCardClicked);
                setRowSelectCard(data._id);
                localStorage.setItem("iNotesRowEditNoteIndex", index);
                localStorage.setItem("iNotesRowEditNoteId", data._id);
                // } else {
                  
                // }
              }}
            >
              <RowCard {...data} />
            </div>
          );
        })}

      {notes?.filter((data: any) => {
        if (currentFolder === "All iCloud") {
          return data;
        } else if (
          data.folder?.toLowerCase()?.includes(currentFolder?.toLowerCase())
        ) {
          return data;
        }
      }).length === 0 && (
        <h2
          style={{
            margin: "auto",
            color: "#7e8a8c",
            textAlign: "center",
            // position: "absolute",
            // left: "50%",
            // top: "50%",
            // transform: "translate(-50%,-50%)",
          }}
        >
          No Notes
        </h2>
      )}
    </StyledRowList>
  );
}

export default RowList;

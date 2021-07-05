import axios from "axios";
import getInputArea from "../components/inputArea.js";

document.getElementById("inputSec").innerHTML = getInputArea();

function component() {
  const element = document.createElement("div");
  return element;
}

document.body.appendChild(component());

document.getElementById("addNoteBtn").addEventListener("click", () => {
  addNote();
});

function addNote() {
  let titleInput = document.getElementById("titleInput");
  let wholeNote = document.getElementById("wholeNote");
  let level = document.querySelector("#chooseLevel");
  let day = document.querySelector("#chooseDay");
  let note = new Note(
    titleInput.value,
    wholeNote.value,
    level.value,
    day.value
  );
  let data = localStorage.getItem(day.value);
  if (data == null) {
    data = [];
  } else {
    data = JSON.parse(data);
  }
  data.push(note);
  localStorage.setItem(day.value, JSON.stringify(data));
}
class Note {
  constructor(titleInput, wholeNote, level, day) {
    this.title = titleInput;
    this.wholeNote = wholeNote;
    this.level = level;
    this.day = day;
  }
}

document.querySelectorAll(".pageArea > a").forEach((a) => {
  a.addEventListener("click", showNotes);
});

let notesCont = document.getElementsByClassName("notesContainer")[0];
let currPage;
function showNotes() {
  let day = this.innerHTML;
  currPage = day;
  let data = localStorage.getItem(day);
  notesCont.innerHTML = "";
  if (data == null) {
    data = [];
    let div = document.createElement("div");
    div.innerHTML = "You have not added any notes for this day";
    notesCont.append(div);
  } else {
    data = JSON.parse(data);
    data.forEach(({ title }) => {
      console.log(title);
      let div = document.createElement("div");
      div.innerHTML = title;
      notesCont.append(div);
    });
  }
}
document
  .querySelector(".showWholePage")
  .addEventListener("click", showWholePage);
// function showWholePage() {
//   console.log("djfk");
//   if (!document.querySelector(".showWholePage").classList.contains("hide")) {
//     document
//       .getElementsByClassName("showWholePage")[0]
//       .classList.remove("hide");
//   }
// }

function showWholePage() {
  if (currPage != undefined) {
    window.open(`${currPage}.html`, "_Parent");
  }
}

function addNote() {
  console.log("hi");
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
  showNotes(day.value);
}
class Note {
  constructor(titleInput, wholeNote, level, day) {
    this.title = titleInput;
    this.wholeNote = wholeNote;
    this.level = level;
    this.day = day;
  }
}

let notesCont = document.getElementsByClassName("notesContainer")[0];
let currPage;
function showNotes(para) {
  let day = para;
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
    data.forEach(({ title, level, wholeNote, day }) => {
      let mainCo = document.createElement("div");
      let tit = document.createElement("div");
      let lev = document.createElement("div");
      let wholeNo = document.createElement("div");
      let da = document.createElement("div");
      tit.innerHTML = `title : ${title}`;
      wholeNo.innerHTML = `wholeNote : ${wholeNote}`;
      lev.innerHTML = `level : ${level}`;
      da.innerHTML = `day : ${day}`;
      mainCo.append(tit, lev, wholeNo, da);
      notesCont.append(mainCo);
    });
  }
}

export { showNotes, Note, addNote };

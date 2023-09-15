const textarea = document.getElementById("content");

function f1(e) {
    let value = e.value;
    textarea.style.fontSize = value + "px";
}

function f2(e) {
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontWeight = "bold";
        e.classList.add("active");
    }
}

function f3(e) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }
}

function f4(e) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}

function f5(e) {
    textarea.style.textAlign = "left";
}

function f6(e) {
    textarea.style.textAlign = "center";
}

function f7(e) {
    textarea.style.textAlign = "right";
}

function f8(e) {
    if (textarea.style.textTransform == "uppercase") {
        textarea.style.textTransform = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textTransform = "uppercase";
        e.classList.add("active");
    }
}

function f9() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}

function f10(e) {
    let value = e.value;
    textarea.style.color = value;
}

window.addEventListener('load', () => {
    textarea.value = "";
});

function openNav() {
  document.getElementById("mySidenav").style.width = "280px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function darkMode() {
  
  
  let darkOn = document.getElementById("dark").style.backgroundColor;

  if (darkOn === "rgb(31, 31, 31)") {
    document.getElementById("dark").style.backgroundColor= "#b2d7f5";
    document.getElementById("toggle-button").style.backgroundColor= "#5271ff";
    document.getElementById("mySidenav").style.backgroundColor = "#5271ff";
    document.getElementById("save-doc").style.backgroundColor = "#5271ff";
    document.getElementById("lines").style.backgroundColor = "black";
    document.getElementById("lines2").style.backgroundColor = "black";
    document.getElementById("lines3").style.backgroundColor = "black";
    document.getElementById('closeSidebar').style.color = 'black';
  } else {
    document.getElementById("dark").style.backgroundColor= "rgb(31, 31, 31)";
    document.getElementById("toggle-button").style.backgroundColor= "rgba(255, 255, 255, 0.4)";
    document.getElementById("mySidenav").style.backgroundColor = "rgb(80, 80, 80)";
    document.getElementById("lines").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    document.getElementById("lines2").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    document.getElementById("lines3").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    document.getElementById("save-doc").style.backgroundColor = "rgb(31, 31, 31)";
    document.getElementById("closeSidebar").style.color = "white";
  }
  
}



//Check if the noe Title exists. If it doesn't, save the new note to local storage. 
function checkTitle() {
  let savedTitle = document.getElementById('currentNoteTitle').value;
  if (savedTitle === null || savedTitle === undefined || savedTitle === ''|| savedTitle.trim() === '' ) {
    alert('You must add a title to your note');
  }

  else {
    
    saveNote();
  }
}


const saveButton = document.querySelector(".save button");

const toolbarButtons = document.querySelectorAll(".toolbar button");

// Function to save a new note
function saveNote() {
  const content = document.getElementById("content").value;
  const title = promptForTitleAndSave();

  const currentTime = new Date();
  const time = currentTime.toLocaleTimeString();
  const date = currentTime.toLocaleDateString();

  // Save the note to localStorage
  const note = { title, time, date, content };
  if (localStorage.getItem(`${title}`) != undefined || localStorage.getItem(`${title}`) != null ) {
    alert('A note with the same name already exists.'); 
  }

  else {

    localStorage.setItem(title, JSON.stringify(note));
    // Clear content in the textarea
    document.getElementById("content").value = "Title";

    // Add the note to sidebar immediately after saving
    addNoteToSidebar(title, time, date, content);

    // Add a click event listener to the note to display its content in the textarea
    addClickEventToNote();
  }
  

  
}

// Function to prompt the user for a title and save the note
function promptForTitleAndSave() {
  let title = document.getElementById('currentNoteTitle').value;


    return title;
  
}

function addNoteToSidebar(title, time, date, content) {
  const sidebar = document.querySelector(".notes");

  const savedNote = document.createElement("div");
  savedNote.className = "saved-note";

  const noteTitle = document.createElement("div");
  noteTitle.className = "note-title";

  // Split the content into words
  const words = content.split(" ");
  // Get the first 4 words
  const firstThreeWords = words.slice(0, 3).join(" ");

  noteTitle.innerHTML = `
<h4>${title}</h4>
<p>${firstThreeWords}...</p> <!-- Display only the first 4 words -->
<div class="Date-Time">
<p>${time}</p>
<p>${date}</p>
</div>
`;

  const closeNote = document.createElement("div");
  closeNote.className = "close-note";
  closeNote.innerHTML = `
<span class="material-symbols-outlined"> delete_forever </span>
`;
  closeNote.addEventListener("click", () => {
    // Handle delete note functionality
    // You can remove the note from the sidebar and localStorage here
    savedNote.remove();

    let key = document.getElementById('currentNoteTitle').value;

    localStorage.removeItem(`${key}`);
  });

  savedNote.appendChild(noteTitle);
  savedNote.appendChild(closeNote);

  // Add the full content as a data attribute for later use
  savedNote.setAttribute("data-full-content", content);

  // Add the note to the top of the sidebar
  sidebar.insertBefore(savedNote, sidebar.firstChild);

  // Add a click event listener to the note to display its content in the textarea
  addClickEventToNote();
}

function loadNotesFromLocalStorage() {
  const sidebar = document.querySelector(".notes");
  sidebar.innerHTML = ""; // Clear the sidebar

  for (let i = 0; i < localStorage.length; i++) {
    const noteKey = localStorage.key(i);
    const note = JSON.parse(localStorage.getItem(noteKey));
    addNoteToSidebar(note.title, note.time, note.date, note.content);
  }
}

function addClickEventToNote() {
  const savedNotes = document.querySelectorAll(".saved-note");
  savedNotes.forEach((note) => {
    note.addEventListener("click", () => {
      const fullContent = note.getAttribute("data-full-content");
      const title = note.querySelector(".note-title h4").textContent;

      // Set the title in the single note
      document.getElementById("currentNoteTitle").textContent = title;

      // Set the content in the textarea
      document.getElementById("content").value = fullContent;
    });
  });
}
// Call the function to load notes when the page loads
loadNotesFromLocalStorage();


const searchInput = document.getElementById("searchbar");
searchInput.addEventListener("input", handleSearch);

function handleSearch() {
  const searchKeyword = searchInput.value.toLowerCase(); // Convert search keyword to lowercase for case-insensitive search
  const savedNotes = document.querySelectorAll(".saved-note");

  savedNotes.forEach((note) => {
    const noteTitle = note
      .querySelector(".note-title h4")
      .textContent.toLowerCase();
    const noteContent = note
      .querySelector(".note-title p")
      .textContent.toLowerCase();

    // Check if the note title or content contains the search keyword
    if (
      noteTitle.includes(searchKeyword) ||
      noteContent.includes(searchKeyword)
    ) {
      note.style.display = "flex"; // Display notes that match
      
    } else {
      note.style.display = "none"; // Hide notes that don't match
    }
  });
}

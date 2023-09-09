const textarea = document.getElementById("textarea1");

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
  } else {
    document.getElementById("dark").style.backgroundColor= "rgb(31, 31, 31)";
    document.getElementById("toggle-button").style.backgroundColor= "rgba(255, 255, 255, 0.4)";
    document.getElementById("mySidenav").style.backgroundColor = "rgb(80, 80, 80)";
    document.getElementById("lines").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    document.getElementById("lines2").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    document.getElementById("lines3").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    document.getElementById("save-doc").style.backgroundColor = "rgb(31, 31, 31)";
  }
  
}
let display = document.getElementById("display");
let menuBtn = document.getElementById("menuBtn");
let submenu = document.getElementById("submenu");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    alert("Invalid input");
  }
}

// Show/Hide sub menu
menuBtn.addEventListener("click", function() {
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
});

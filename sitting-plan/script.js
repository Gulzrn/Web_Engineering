let students = JSON.parse(localStorage.getItem("students")) || [];
let examConfig = JSON.parse(localStorage.getItem("examConfig")) || {};

// Save exam setup
document.getElementById("examForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  examConfig = {
    students: document.getElementById("students").value,
    seats: document.getElementById("seats").value,
    rows: document.getElementById("rows").value,
    cols: document.getElementById("cols").value,
    batches: document.getElementById("batches").value
  };
  localStorage.setItem("examConfig", JSON.stringify(examConfig));
  window.location.href = "students.html";
});

// Add student
function addStudent() {
  let student = {
    id: document.getElementById("cms").value,
    name: document.getElementById("name").value,
    batch: document.getElementById("batch").value,
    intake: document.getElementById("intake").value,
    course: document.getElementById("course").value
  };
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
  showStudents();
}

// Show student list
function showStudents() {
  let list = "<ul>";
  students.forEach(s => {
    list += `<li>${s.name} (${s.course})</li>`;
  });
  list += "</ul>";
  document.getElementById("studentList").innerHTML = list;
}

// Save students
function saveStudents() {
  localStorage.setItem("students", JSON.stringify(students));
  window.location.href = "result.html";
}

// Generate seating plan
function generatePlan() {
  let rows = parseInt(examConfig.rows);
  let cols = parseInt(examConfig.cols);
  let shuffled = students.sort(() => Math.random() - 0.5);

  let table = "<table>";
  let index = 0;
  for (let r = 0; r < rows; r++) {
    table += "<tr>";
    for (let c = 0; c < cols; c++) {
      if (index < shuffled.length) {
        let s = shuffled[index];
        table += `<td>${s.name}<br>${s.course}</td>`;
        index++;
      } else {
        table += "<td>Empty</td>";
      }
    }
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById("plan").innerHTML = table;
}

// Search student
function searchStudent() {
  let input = document.getElementById("search").value.toLowerCase();
  let cells = document.querySelectorAll("#plan td");
  cells.forEach(cell => {
    if (cell.innerText.toLowerCase().includes(input)) {
      cell.style.background = "yellow";
      cell.style.color = "black";
    } else {
      cell.style.background = "transparent";
      cell.style.color = "white";
    }
  });
}

function goBack() {
  window.history.back();
}

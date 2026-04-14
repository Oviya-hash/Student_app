const API = "http://localhost:5000/students";

function loadStudents() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("list");
      list.innerHTML = "";
      data.forEach(s => {
        const li = document.createElement("li");
        li.innerText = `${s.name} - ${s.course}`;
        list.appendChild(li);
      });
    });
}

function addStudent() {
  fetch(API, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: name.value,
      age: age.value,
      course: course.value
    })
  }).then(loadStudents);
}

loadStudents();
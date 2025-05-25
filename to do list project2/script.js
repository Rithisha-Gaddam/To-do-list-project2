// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});

// Dynamic To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Enter a task first.");
    return;
  }

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="remove-btn" onclick="removeTask(this)">Remove</button>`;
  taskList.appendChild(li);
  taskInput.value = "";
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}

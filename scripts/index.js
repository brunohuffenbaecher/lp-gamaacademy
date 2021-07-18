window.addEventListener("load", start);

function start() {
  const form = document.getElementById("form");

  form.addEventListener("submit", formSubmit);
}

function formSubmit(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let spanDone = document.getElementById("done");

  let users = [];

  users = JSON.parse(localStorage.getItem("users", JSON.stringify(users)));
  if (users === null) {
    users = [];
  }

  console.log(users);

  users.push({ name, email });

  localStorage.setItem("users", JSON.stringify(users));
  spanDone.innerText = `We'll keep in touch!`;
}

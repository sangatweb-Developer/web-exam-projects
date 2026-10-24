// 1. Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Dark mode button
var themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
};

// 3. Contact form: check name, email and message
document.getElementById("contactForm").onsubmit = function (e) {
  e.preventDefault();

  var name = document.getElementById("cname").value.trim();
  var email = document.getElementById("cemail").value.trim();
  var message = document.getElementById("cmessage").value.trim();
  var msg = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    msg.textContent = "Please fill all the fields.";
    msg.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    msg.textContent = "Please enter a valid email.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Thank you, " + name + "! Your message was sent.";
    msg.style.color = "green";
    document.getElementById("contactForm").reset();
  }
};
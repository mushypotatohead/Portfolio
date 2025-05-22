document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("responseMessage");

  if (!name || !email || !message) {
    response.textContent = "Please fill in all fields.";
    response.style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    response.textContent = "Please enter a valid email address.";
    response.style.color = "red";
    return;
  }

  response.textContent = "Thank you for your message!";
  response.style.color = "green";

  
  this.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

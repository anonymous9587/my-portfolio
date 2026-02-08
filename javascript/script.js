//Date and Time
function updateTime() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  let ampm = "";

  if (hours >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  hours = hours % 12 || 12;

  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  }

  document.querySelector(
    ".time"
  ).innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;

  document.querySelector(".date").innerHTML = `${date}/${month}/${year}`;
}

setInterval(updateTime, 1000);

//Sidebar

let sideicon = document.querySelector("i");
let ul = document.querySelector(".sidebar");

sideicon.addEventListener("click", () => {
  ul.classList.toggle("sidebar-active");
  ul.classList.remove("sidebar-remove");
});

//Accordion

const headers = document.querySelectorAll(".accordion-header");
const accordionContent = document.querySelectorAll(".accordion-content");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    accordionContent.forEach((item) => {
      if (item !== content) item.style.maxHeight = null;
    });

    content.style.maxHeight = content.style.maxHeight
      ? null
      : content.scrollHeight + "px";
  });
});

// slider

var items = document.getElementsByClassName("items");
var container = document.querySelector(".container-img");

var poe = 0;
function slidenext() {
  poe++;
  if (poe > items.length - 1) {
    poe = 0;
  }
  for (var image of items) {
    image.style.transform = `translateX(-${100 * poe}%)`;
  }
}

function slideprev() {
  if (poe == 0) return;
  poe--;

  for (var image of items) {
    image.style.transform = `translateX(-${100 * poe}%)`;
  }
}

var autoScroll = setInterval(slidenext, 2000);
container.addEventListener("mouseenter", () => clearInterval(autoScroll));
container.addEventListener(
  "mouseleave",
  () => (autoScroll = setInterval(slidenext, 2000))
);

// form validations

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let fullName = document.getElementById("fullName");
  let email = document.getElementById("emailAddress");
  let phone = document.getElementById("mobileNumber");
  let subject = document.getElementById("emailSubject");
  let message = document.getElementById("message");

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let phoneError = document.getElementById("phoneError");
  let subjectError = document.getElementById("subjectError");
  let msgError = document.getElementById("msgError");

  let valid = true;

  if (fullName === "") {
    nameError.innerText = "Full name is required";
    valid = false;
  } else {
    nameError.innerText = "";
  }

  if (email === "") {
    emailError.innerText = "Email is required";
    valid = false;
  } else {
    emailError.innerText = "";
  }

  if (phone === "") {
    phoneError.innerText = "Mobile number is required";
    valid = false;
  } else {
    phoneError.innerText = "";
  }

  if (subject === "") {
    subjectError.innerText = "Subject is required";
    valid = false;
  } else {
    subjectError.innerText = "";
  }

  if (message.length < 10) {
    msgError.innerText = "Message must";
    valid = false;
  } else {
    msgError.innerText = "";
  }

  if (valid) {
    alert("Message sent successfully!");
    form.reset();
  }
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// script.js

// Fade-in animation for elements with .fade-in class
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// Contact form interaction
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
  form.reset();
});

// Scroll-to-top button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆";
scrollBtn.id = "scrollTopBtn";
scrollBtn.title = "Back to top";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.backgroundColor = "#0077cc";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Dark mode toggle
const toggle = document.createElement("button");
toggle.innerText = "🌙";
toggle.id = "darkModeToggle";
toggle.title = "Toggle dark mode";
document.body.appendChild(toggle);

toggle.style.position = "fixed";
toggle.style.top = "20px";
toggle.style.right = "60px";
toggle.style.padding = "10px 15px";
toggle.style.border = "none";
toggle.style.borderRadius = "8px";
toggle.style.backgroundColor = "#333";
toggle.style.color = "white";
toggle.style.cursor = "pointer";
toggle.style.zIndex = "999";

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.innerText = document.body.classList.contains("dark-mode") ? "🔆" : "🌙";
});

// Adjust anchor scrolling manually
const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  });
});

// Shrink header layout width and height
const header = document.querySelector("header .container");
if (header) {
  header.style.maxWidth = "900px";
  header.style.margin = "0 auto";
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "space-between";
  header.style.flexWrap = "wrap";
  header.parentElement.style.padding = "10px 0";
}

const nav = document.querySelector("nav ul.nav-links");
if (nav) {
  nav.style.flexWrap = "wrap";
  nav.style.justifyContent = "flex-end";
  nav.style.gap = "15px";
  nav.style.fontSize = "0.9rem";
}

const logo = document.querySelector("header h1.logo");
if (logo) {
  logo.style.fontSize = "1.2rem";
  logo.style.flexShrink = "0";
}

// Add card style to skills section
const skills = document.querySelector(".skills-grid");
if (skills) {
  const items = Array.from(skills.children);
  skills.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("skill-card");
    card.innerHTML = item.innerHTML;
    skills.appendChild(card);
  });
}

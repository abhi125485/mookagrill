/* ===========================
   Mooka Grill – Animated JS
=========================== */

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(17, 17, 17, 0.95)";
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.4)";
  } else {
    nav.style.background = "#111";
    nav.style.boxShadow = "none";
  }
});

// FADE-IN ON SCROLL
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// SMOOTH SCROLL FOR INTERNAL LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// SIMPLE MOBILE MENU TOGGLE (if you add a burger later)
const menuToggle = document.querySelector(".menu-toggle");
if (menuToggle) {
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// FADE ANIMATION (CSS hookup)
const style = document.createElement("style");
style.innerHTML = `
  .fade-in { opacity: 0; transform: translateY(30px); transition: all 0.8s ease; }
  .fade-in.appear { opacity: 1; transform: translateY(0); }
  .nav-links.open { display: flex; flex-direction: column; background: #111; width: 100%; }
`;
document.head.appendChild(style);

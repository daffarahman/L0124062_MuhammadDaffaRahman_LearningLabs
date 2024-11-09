// Navbar Scroll
let navbarTop = document.getElementById("navbar").style.top;
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = navbarTop;
  } else {
    document.getElementById("navbar").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;
};

// Navbar Dropdown
let navbarOpen = false;
const toggleNavbar = () => {
  navbarOpen = !navbarOpen;
  document.getElementById("nav-dropdown").style.display =
    navbarOpen && window.matchMedia("(max-width: 768px)").matches
      ? "block"
      : "none";
};

window.addEventListener(
  "resize",
  (event) => {
    if (navbarOpen && !window.matchMedia("(max-width: 768px)").matches) {
      navbarOpen = false;
      document.getElementById("nav-dropdown").style.display = "none";
    }
  },
  true
);

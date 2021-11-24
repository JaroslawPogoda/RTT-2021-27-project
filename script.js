// Adds styling to navigation bar when scrolling starts
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".nav-bar");

  navbar.classList.toggle("scrolling-active", window.scrollY > 1);
});

// Functions that open and close the mobile navigation menu
function openNav() {
  document.getElementById("mobile-nav").style.height = "100%";
}

function closeNav() {
  document.getElementById("mobile-nav").style.height = "0%";
}

// menu bars
const menuBtn = document.querySelector(".btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  // IGNORE LINE 22-24
  // menuBtn.classList.toggle("open");
  // openNav();
  // let menuOpen = false;
  if (!menuOpen) {
    menuBtn.classList.add("open");
    openNav();
    menuOpen = true;
  } else {
    menuOpen = false;
    menuBtn.classList.remove("open");
    closeNav();
  }
});

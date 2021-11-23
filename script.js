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

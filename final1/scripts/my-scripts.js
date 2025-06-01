// JavaScript to toggle the mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navLinkItems = navLinks.querySelectorAll("a"); // Get all anchor tags within nav-links

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});

// Add event listener to each navigation link
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    // Check if the nav links are currently visible (not hidden)
    if (!navLinks.classList.contains("hidden")) {
      navLinks.classList.add("hidden"); // Hide the nav links
    }
  });
});

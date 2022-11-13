function toggleMenuVisibility() {
  const el = document.getElementById("hamburger-nav");
  if (el.style.display === "none" || el.style.display === "") {
    el.style.display = "flex";
  } else {
    el.style.display = "none";
  }
}
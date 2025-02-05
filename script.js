function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");
  let burger = document.getElementById("burger");
  if (burger.classList.contains("text-primary")) {
    burger.classList.replace("text-primary", "text-secondary");
  } else if (burger.classList.contains("text-secondary")) {
    burger.classList.replace("text-secondary", "text-primary");
  }
}

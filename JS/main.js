const content = document.getElementById("content");
const nav = document.getElementById("nav");
const close_btn = document.getElementById("close-btn");
const toggle_btn = document.getElementById("toggle-btn");
const plateaux_move = document.getElementById("plateaux-move");
const message = document.getElementById("message");
const main_bnt_grid = document.getElementById("main-bnt-grid");

// BAR DE NAVIGATION

toggle_btn.addEventListener("click", openNav);
close_btn.addEventListener("click", closeNav);

function openNav() {
  this.style.display = "none";
  nav.classList.add("active");
  content.classList.add("active");
  plateaux_move.classList.add("active");
  message.classList.add("active");
  main_bnt_grid.classList.add("active");
  document.body.classList.add("dark");
}

function closeNav() {
  toggle_btn.style.display = "block";
  nav.classList.remove("active");
  content.classList.remove("active");
  plateaux_move.classList.remove("active");
  message.classList.remove("active");
  main_bnt_grid.classList.remove("active");
  document.body.classList.remove("dark");
}

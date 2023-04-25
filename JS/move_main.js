const content = document.getElementById("content");
const nav = document.getElementById("nav");
const close_btn = document.getElementById("close-btn");
const toggle_btn = document.getElementById("toggle-btn");
const board_game_move = document.getElementById("board_game");
const message = document.getElementById("message");
const main_bnt_grid = document.getElementById("main-bnt-grid");

var divRouge = document.querySelector(".white_pawn");
var divBleu = document.querySelector(".black_pawn");

var restartButton = document.getElementById("btn-restart");
var quitButton = document.getElementById("btn-quit");

var cell = document.querySelectorAll(".cell");

// -----------------------------------------
//                  FONCTION
// -----------------------------------------

// REJOUER LA PARTIE OU QUITTER

//Nouvelle partie
function refreshWindow() {
  window.location.reload();
}
restartButton.addEventListener("click", refreshWindow);

// Quitter partie
function quitWindow() {
  window.location.close();
}
quitButton.addEventListener("click", quitWindow);

// BAR DE NAVIGATION

toggle_btn.addEventListener("click", openNav);
close_btn.addEventListener("click", closeNav);

function openNav() {
  this.style.display = "none";
  nav.classList.add("active");
  content.classList.add("active");
  board_game_move.classList.add("active");
  message.classList.add("active");
  main_bnt_grid.classList.add("active");
  document.body.classList.add("dark");
}

function closeNav() {
  toggle_btn.style.display = "block";
  nav.classList.remove("active");
  content.classList.remove("active");
  board_game_move.classList.remove("active");
  message.classList.remove("active");
  main_bnt_grid.classList.remove("active");
  document.body.classList.remove("dark");
}

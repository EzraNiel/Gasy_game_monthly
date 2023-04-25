// TABLEAU
var tab = [
  [1, 1, 1],
  [0, 0, 0],
  [2, 2, 2],
];

var cell = document.querySelectorAll(".cell");
var turn = document.querySelector(".board_game");

var player = "p1";

for (var elmt of cell) {
  var temp, from;

  elmt.addEventListener(
    "click",
    function (e) {
      if (!turn.classList.contains("moving")) {
        if (turn.classList.contains("player1")) {
          if (this.classList.contains("p1")) {
            from = this.id;

            this.classList.remove("p1");
            this.classList.add("active-p1");
            temp = this;

            turn.classList.add("moving");
          } else {
            alert("Misafidiana vato fotsy!");
          }
        } else if (turn.classList.contains("player2")) {
          if (this.classList.contains("p2")) {
            from = this.id;

            console.log(this.id);

            this.classList.remove("p2");
            this.classList.add("active-p2");
            temp = this;

            turn.classList.add("moving");
          } else {
            alert("Misafidiana vato mainty!");
          }
        }
      } else {
        if (turn.classList.contains("player1")) {
          if (this != temp) {
            if (
              !this.classList.contains("p1") &&
              !this.classList.contains("p2") &&
              isValid(from, this.id)
            ) {
              moveTo(from, this.id);

              this.classList.add("p1");

              temp.classList.remove("active-p1");

              turn.classList.remove("moving");
              turn.classList.remove("player1");
              turn.classList.add("player2");
            } else {
              alert("Misafidiana toerana tsy misy vato mipetraka!");
            }

            if (isWinner(1)) {
              alert("Mandresy fotsy");
              const message = document.getElementById("message");
              message.innerHTML = "Mandresy ny fotsy !!";
              message.classList.add("actived");
            }
          } else {
            this.classList.add("p1");
            this.classList.remove("active-p1");

            turn.classList.remove("moving");
          }
        } else if (turn.classList.contains("player2")) {
          if (this != temp) {
            if (
              !this.classList.contains("p1") &&
              !this.classList.contains("p2") &&
              this != temp &&
              isValid(from, this.id)
            ) {
              moveTo(from, this.id);

              this.classList.add("p2");

              temp.classList.remove("active-p2");

              turn.classList.remove("moving");
              turn.classList.remove("player2");
              turn.classList.add("player1");
            } else {
              alert("Sélectionner une zone vide adjacente!");
            }

            if (isWinner(2)) {
              alert("Mandresy mainty");
              message.innerHTML = "Mandresy ny mainty!!";
              message.classList.add("actived");
            }
          } else {
            this.classList.add("p1");
            this.classList.remove("active-p1");

            turn.classList.remove("moving");
          }
        }
      }
    },
    false
  );
}

// -----------------------------------------
//                  FONCTION
// -----------------------------------------

// Mouvement des pion
function moveTo(id1, id2) {
  var start = id1.split("-")[1].split("");
  var end = id2.split("-")[1].split("");

  if (tab[end[0]][end[1]] != 0) {
    console.log("Erreur!!");
    return;
  }

  tab[end[0]][end[1]] = tab[start[0]][start[1]];
  tab[start[0]][start[1]] = 0;
}

/* -----------------------------------------*/

function display() {
  for (var i = 0; i < 3; i++) {
    console.log(tab[i][0], " ", tab[i][1], " ", tab[i][2]);
  }
}

/* -----------------------------------------*/

function isValid(id1, id2) {
  var start = id1.split("-")[1];
  var end = id2.split("-")[1];

  // Mouvement valide à partir au centre
  if (start === "11") {
    if (
      end === "00" ||
      end === "01" ||
      end === "02" ||
      end === "10" ||
      end === "12" ||
      end === "20" ||
      end === "21" ||
      end === "22"
    )
      return true;
  }

  // Mouvement valide à partir des coins
  if (start === "00") {
    if (end === "01" || end === "10" || end === "11") return true;
  }

  if (start === "02") {
    if (end === "01" || end === "12" || end === "11") return true;
  }

  if (start === "20") {
    if (end === "21" || end === "10" || end === "11") return true;
  }

  if (start === "22") {
    if (end === "21" || end === "12" || end === "11") return true;
  }

  // Mouvement valide à partir des  cotés
  if (start === "01") {
    if (end === "00" || end === "02" || end === "11") return true;
  }

  if (start === "10") {
    if (end === "00" || end === "20" || end === "11") return true;
  }

  if (start === "21") {
    if (end === "20" || end === "22" || end === "11") return true;
  }

  if (start === "12") {
    if (end === "02" || end === "22" || end === "11") return true;
  }
  return false;
}

/* -----------------------------------------*/

function isAlignedX(x) {
  var compt = 0;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (tab[i][j] == x) {
        compt++;
      }
    }
    if (compt == 3) {
      return true;
    }
    compt = 0;
  }

  return false;
}

function isAlignedY(x) {
  var compt = 0;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (tab[j][i] == x) {
        compt++;
      }
    }
    if (compt == 3) {
      return true;
    }
    compt = 0;
  }

  return false;
}

function isAlignedDiag(x) {
  if (x == tab[0][0] || x == tab[2][2] || x == tab[1][1])
    if (tab[1][1] == tab[0][0] && tab[1][1] == tab[2][2]) return true;

  if (x == tab[0][2] || x == tab[2][0] || x == tab[1][1])
    if (tab[1][1] == tab[0][2] && tab[1][1] == tab[2][0]) return true;

  return false;
}

/* -----------------------------------------*/

function isWinner(x) {
  if (isAlignedX(x) || isAlignedY(x) || isAlignedDiag(x)) return true;

  return false;
}

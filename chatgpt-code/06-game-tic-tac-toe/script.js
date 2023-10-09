var currentPlayer = "X";
var gameEnded = false;
var cells = document.getElementsByClassName("cell");
var modal = document.getElementById("myModal");
var modalText = document.getElementById("modal-text");
var closeButton = document.getElementsByClassName("close")[0];

// Add event listeners to cells
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked, false);
}

// Function to handle cell click
function cellClicked() {
  if (gameEnded) return;

  if (this.textContent === "") {
    this.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
      showModal("Player " + currentPlayer + " wins!");
      gameEnded = true;
    } else if (checkDraw()) {
      showModal("It's a draw!");
      gameEnded = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

// Function to check for a win
function checkWin(player) {
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6] // Diagonals
  ];

  for (var i = 0; i < winningCombinations.length; i++) {
    var combo = winningCombinations[i];
    if (
      cells[combo[0]].textContent === player &&
      cells[combo[1]].textContent === player &&
      cells[combo[2]].textContent === player
    ) {
      return true;
    }
  }

  return false;
}

// Function to check for a draw
function checkDraw() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }
  return true;
}

// Function to show the modal
function showModal(message) {
  modalText.textContent = message;
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener for the close button
closeButton.addEventListener("click", closeModal);

// Function to reset the board
function resetBoard() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  currentPlayer = "X";
  gameEnded = false;
}

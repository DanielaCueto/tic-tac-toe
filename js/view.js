"use strict";
class View {
  constructor(model) {
    this.model = model;
    this.model.onUpdate(() => {
      this.draw();
    });
    this.board = document.querySelectorAll(".board > div");
    this.player1Marker = document.querySelector(".player1Marker");
    this.player2Marker = document.querySelector(".player2Marker");
    this.finalMsg = document.querySelector(".finalmsg");
  }

  draw() {
    this.drawBoard();
    this.drawCurrentPlayer();
  }
  drawBoard() {
    const boardModel = this.model.getBoard();
    for (let i = 0; i < boardModel.length; i++) {
      const cellValue = boardModel[i]; //Aquí se guarda el valor que esta guardado en la celda del indice [i];
      const cellDiv = this.board[i]; //guarda la referencia al div que estoy mirando actualmente (div que corresponde al indice [i])
      switch (cellValue) {
        case 1:
          cellDiv.setAttribute("class", "player1");
          break;
        case 2:
          cellDiv.setAttribute("class", "player2");
          break;
        default:
          cellDiv.setAttribute("class", "");
          break;
      }
    }
  }
  drawCurrentPlayer() {
    const actualPlayer = this.model.getCurrentPlayer();
    if (actualPlayer === 1) {
      this.player1Marker.setAttribute("class", "active");
      this.player2Marker.setAttribute("class", "");
    } else {
      this.player2Marker.setAttribute("class", "active");
      this.player1Marker.setAttribute("class", "");
    }
  }
}

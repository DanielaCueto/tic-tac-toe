"use strict";

class Model {
  constructor() {
    this.currentPlayer = 1;
    this.board = new Array(9);
    this.board.fill(undefined);
    this.currentState = "play";

    this.listeners = [];
  }
  getCurrentPlayer() {
    return this.currentPlayer;
  }
  setCurrentPlayer(newCurrentPlayer) {
    this.currentPlayer = newCurrentPlayer;
    this.notifyListeners();
  }
  getBoard() {
    return this.board;
  }
  setBoard(newBoard) {
    this.board = newBoard;
    this.notifyListeners();
  }
  getCurrentState() {
    return this.currentState;
  }
  setCurrentState(newState) {
    this.currentState = newState;
    this.notifyListeners();
  }

  onUpdate(listenerFunction) {
    this.listeners.push(listenerFunction);
  }
  notifyListeners() {
    for (let listener of this.listeners) {
      listener();
    }
  }
}

import { RoverState } from "./RoverState";

export class Rover {
  constructor(positionAndDirection: string = "") {
    const positionAndDirectionArray = positionAndDirection.split(" ");
    const minimumAmountOfInputVariables = 3;
    if (positionAndDirectionArray.length >= minimumAmountOfInputVariables) {
      this.roverState.xx = parseInt(positionAndDirectionArray[0], 10);
      this.roverState.yy = parseInt(positionAndDirectionArray[1], 10);
      this.roverState.direction = positionAndDirectionArray[2][0];
    }
  }

  private readonly LEFT = "L";
  private readonly RIGHT = "R";
  private readonly EAST = "E";
  private readonly NORTH = "N";
  private readonly WEST = "W";
  private readonly SOUTH = "S";
  private readonly MOVE = "M";

  public go(roverMovementInstruction: string): void {
    for (
      let instruction = 0;
      instruction < roverMovementInstruction.length;
      instruction++
    ) {
      const instructionElement = roverMovementInstruction[instruction];
      switch (instructionElement) {
        case this.LEFT:
          this.executeLeftTurn();
          break;
        case this.RIGHT:
          this.executeRightTurn();
          break;
        case this.MOVE:
          this.executeMove();
          break;
      }
    }
  }

  private executeMove() {
    switch (this.roverState.direction) {
      case this.EAST:
        this.moveEast();
        break;
      case this.SOUTH:
        this.moveSouth();
        break;
      case this.WEST:
        this.moveWest();
        break;
      case this.NORTH:
        this.moveNorth();
        break;
    }
  }

  private executeRightTurn() {
    switch (this.roverState.direction) {
      case this.EAST:
        this.setDirectionSouth();
        break;
      case this.SOUTH:
        this.setDirectionWest();
        break;
      case this.WEST:
        this.setDirectionNorth();
        break;
      case this.NORTH:
        this.setDirectionEast();
        break;
    }
  }

  private executeLeftTurn() {
    switch (this.roverState.direction) {
      case this.EAST:
        this.setDirectionNorth();
        break;
      case this.NORTH:
        this.setDirectionWest();
        break;
      case this.WEST:
        this.setDirectionSouth();
        break;
      case this.SOUTH:
        this.setDirectionEast();
        break;
    }
  }

  private moveNorth() {
    this.roverState.yy++;
  }

  private moveWest() {
    this.roverState.xx--;
  }

  private moveSouth() {
    this.roverState.yy--;
  }

  private moveEast() {
    this.roverState.xx++;
  }
  private setDirectionEast() {
    this.roverState.direction = this.EAST;
  }

  private setDirectionNorth() {
    this.roverState.direction = this.NORTH;
  }

  private setDirectionWest() {
    this.roverState.direction = this.WEST;
  }

  private setDirectionSouth() {
    this.roverState.direction = this.SOUTH;
  }

  public G(z: string): void {
    this.go(z[0]);
  }

  public get XYD(): string {
    return `${this.roverState.xx} ${this.roverState.yy} ${this.roverState.direction}`;
  }

  public pos(): string {
    return this.XYD;
  }

  private roverState: RoverState = new RoverState();
}

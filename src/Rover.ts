import { RoverState } from "./RoverState";
import { Position } from "./Position";

export class Rover {
  constructor(positionAndDirection: string = "") {
    const positionAndDirectionArray = positionAndDirection.split(" ");
    const minimumAmountOfInputVariables = 3;
    if (positionAndDirectionArray.length >= minimumAmountOfInputVariables) {
      const xPosition = parseInt(positionAndDirectionArray[0], 10);
      const yPosition = parseInt(positionAndDirectionArray[1], 10);
      const direction = positionAndDirectionArray[2][0];

      this.roverState.position = new Position(xPosition, yPosition, direction);
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
    switch (this.roverState.position.getDirection()) {
      case this.EAST:
        this.roverState.position.moveEast();
        break;
      case this.SOUTH:
        this.roverState.position.moveSouth();
        break;
      case this.WEST:
        this.roverState.position.moveWest();
        break;
      case this.NORTH:
        this.roverState.position.moveNorth();
        break;
    }
  }

  private executeRightTurn() {
    switch (this.roverState.position.getDirection()) {
      case this.EAST:
        this.roverState.position.setDirectionSouth();
        break;
      case this.SOUTH:
        this.roverState.position.setDirectionWest();
        break;
      case this.WEST:
        this.roverState.position.setDirectionNorth();
        break;
      case this.NORTH:
        this.roverState.position.setDirectionEast();
        break;
    }
  }

  private executeLeftTurn() {
    switch (this.roverState.position.getDirection()) {
      case this.EAST:
        this.roverState.position.setDirectionNorth();
        break;
      case this.NORTH:
        this.roverState.position.setDirectionWest();
        break;
      case this.WEST:
        this.roverState.position.setDirectionSouth();
        break;
      case this.SOUTH:
        this.roverState.position.setDirectionEast();
        break;
    }
  }

  public G(z: string): void {
    this.go(z[0]);
  }

  public get XYD(): string {
    return this.roverState.position.toString();
  }

  public pos(): string {
    return this.XYD;
  }

  private roverState: RoverState = new RoverState();
}

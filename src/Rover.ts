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
    if (this.isLookingEast()) {
      this.moveEast();
    }
    if (this.isLookingSouth()) {
      this.moveSouth();
    }
    if (this.isLookingWest()) {
      this.moveWest();
    }
    if (this.isLookingNorth()) {
      this.moveNorth();
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

  private isLookingNorth() {
    return this.roverState.direction === this.NORTH;
  }

  private isLookingWest() {
    return this.roverState.direction === this.WEST;
  }

  private isLookingSouth() {
    return this.roverState.direction === this.SOUTH;
  }

  private isLookingEast() {
    return this.roverState.direction === this.EAST;
  }

  private executeRightTurn() {
    if (this.isLookingEast()) {
      this.roverState.direction = this.SOUTH;
    } else if (this.isLookingSouth()) {
      this.roverState.direction = this.WEST;
    } else if (this.isLookingWest()) {
      this.roverState.direction = this.NORTH;
    } else if (this.isLookingNorth()) {
      this.roverState.direction = this.EAST;
    }
  }
  private executeLeftTurn() {
    if (this.isLookingEast()) {
      this.roverState.direction = this.NORTH;
    } else if (this.isLookingNorth()) {
      this.roverState.direction = this.WEST;
    } else if (this.isLookingWest()) {
      this.roverState.direction = this.SOUTH;
    } else if (this.isLookingSouth()) {
      this.roverState.direction = this.EAST;
    }
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

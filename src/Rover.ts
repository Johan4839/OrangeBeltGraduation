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

  public go(roverMovementInstruction: string): void {
    const LEFT = "L";
    const RIGHT = "R";
    const EAST = "E";
    const NORTH = "N";
    const WEST = "W";
    const SOUTH = "S";
    const MOVE = "M";
    for (
      let instruction = 0;
      instruction < roverMovementInstruction.length;
      instruction++
    ) {
      const instructionElement = roverMovementInstruction[instruction];
      if (instructionElement === LEFT) {
        if (this.roverState.direction === EAST) {
          this.roverState.direction = NORTH;
        } else if (this.roverState.direction === NORTH) {
          this.roverState.direction = WEST;
        } else if (this.roverState.direction === WEST) {
          this.roverState.direction = SOUTH;
        } else if (this.roverState.direction === SOUTH) {
          this.roverState.direction = EAST;
        }
      } else if (instructionElement === RIGHT) {
        if (this.roverState.direction === EAST) {
          this.roverState.direction = SOUTH;
        } else if (this.roverState.direction === SOUTH) {
          this.roverState.direction = WEST;
        } else if (this.roverState.direction === WEST) {
          this.roverState.direction = NORTH;
        } else if (this.roverState.direction === NORTH) {
          this.roverState.direction = EAST;
        }
      } else if (instructionElement === MOVE) {
        if (this.roverState.direction === EAST) {
          this.roverState.xx++;
        }
        if (this.roverState.direction === SOUTH) {
          this.roverState.yy--;
        }
        if (this.roverState.direction === WEST) {
          this.roverState.xx--;
        }
        if (this.roverState.direction === NORTH) {
          this.roverState.yy++;
        }
      }
    }
  }
  public get XYD(): string {
    return `${this.roverState.xx} ${this.roverState.yy} ${this.roverState.direction}`;
  }

  public pos(): string {
    return this.XYD;
  }

  private roverState: RoverState = new RoverState();
}

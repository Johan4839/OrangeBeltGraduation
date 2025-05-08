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
      if (this.checkForLeftTurn(instructionElement)) {
        this.performLeftTurn();
      } else if (this.checkForRightTurn(instructionElement)) {
        if (this.roverState.direction === this.EAST) {
          this.roverState.direction = this.SOUTH;
        } else if (this.roverState.direction === this.SOUTH) {
          this.roverState.direction = this.WEST;
        } else if (this.roverState.direction === this.WEST) {
          this.roverState.direction = this.NORTH;
        } else if (this.roverState.direction === this.NORTH) {
          this.roverState.direction = this.EAST;
        }
      } else if (instructionElement === this.MOVE) {
        if (this.roverState.direction === this.EAST) {
          this.roverState.xx++;
        }
        if (this.roverState.direction === this.SOUTH) {
          this.roverState.yy--;
        }
        if (this.roverState.direction === this.WEST) {
          this.roverState.xx--;
        }
        if (this.roverState.direction === this.NORTH) {
          this.roverState.yy++;
        }
      }
    }
  }

  private checkForRightTurn(instructionElement: string) {
    return instructionElement === this.RIGHT;
  }

  private performLeftTurn() {
    if (this.roverState.direction === this.EAST) {
      this.roverState.direction = this.NORTH;
    } else if (this.roverState.direction === this.NORTH) {
      this.roverState.direction = this.WEST;
    } else if (this.roverState.direction === this.WEST) {
      this.roverState.direction = this.SOUTH;
    } else if (this.roverState.direction === this.SOUTH) {
      this.roverState.direction = this.EAST;
    }
  }

  private checkForLeftTurn(instructionElement: string) {
    return instructionElement === this.LEFT;
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

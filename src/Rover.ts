import { RoverState } from "./RoverState";

export class Rover {
  constructor(positionAndDirection: string = "") {
    const positionAndDirectionArray = positionAndDirection.split(" ");
    if (positionAndDirectionArray.length >= 3) {
      this.roverState.xx = parseInt(positionAndDirectionArray[0], 10);
      this.roverState.yy = parseInt(positionAndDirectionArray[1], 10);
      this.roverState.direction = positionAndDirectionArray[2][0];
    }
  }

  public go(cms: string): void {
    for (let i = 0; i < cms.length; i++) {
      const c = cms[i];
      if (c === "L") {
        if (this.roverState.direction === "E") {
          this.roverState.direction = "N";
        } else if (this.roverState.direction === "N") {
          this.roverState.direction = "W";
        } else if (this.roverState.direction === "W") {
          this.roverState.direction = "S";
        } else if (this.roverState.direction === "S") {
          this.roverState.direction = "E";
        }
      } else if (c === "R") {
        if (this.roverState.direction === "E") {
          this.roverState.direction = "S";
        } else if (this.roverState.direction === "S") {
          this.roverState.direction = "W";
        } else if (this.roverState.direction === "W") {
          this.roverState.direction = "N";
        } else if (this.roverState.direction === "N") {
          this.roverState.direction = "E";
        }
      } else if (c === "M") {
        if (this.roverState.direction === "E") {
          this.roverState.xx++;
        }
        if (this.roverState.direction === "S") {
          this.roverState.yy--;
        }
        if (this.roverState.direction === "W") {
          this.roverState.xx--;
        }
        if (this.roverState.direction === "N") {
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

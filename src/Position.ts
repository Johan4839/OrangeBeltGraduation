export class Position {
  private xx: number = 0;
  private yy: number = 0;
  private direction: string = "N";

  constructor(xx: number, yy: number, direction: string) {
    this.xx = xx;
    this.yy = yy;
    this.direction = direction;
  }

  private readonly EAST = "E";
  private readonly NORTH = "N";
  private readonly WEST = "W";
  private readonly SOUTH = "S";

  moveNorth() {
    this.yy++;
  }

  moveWest() {
    this.xx--;
  }

  moveSouth() {
    this.yy--;
  }

  moveEast() {
    this.xx++;
  }

  setDirectionEast() {
    this.direction = this.EAST;
  }

  setDirectionNorth() {
    this.direction = this.NORTH;
  }

  setDirectionWest() {
    this.direction = this.WEST;
  }

  setDirectionSouth() {
    this.direction = this.SOUTH;
  }

  toString(): string {
    return `${this.xx} ${this.yy} ${this.direction}`;
  }
}

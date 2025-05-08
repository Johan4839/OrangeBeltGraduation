import { Position } from "./Position";

export class RoverState {
  xx: number = 0;
  yy: number = 0;
  direction: string = "N"; // 'char' in C# is effectively a one-character string in TypeScript

  public _position: Position;

  constructor() {
    this._position = new Position(this.xx, this.yy, this.direction);
  }

  get position(): Position {
    return this._position;
  }

  set position(value: Position) {
    this._position = value;
  }
}

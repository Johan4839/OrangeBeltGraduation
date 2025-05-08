export class Position {
  private xx: number = 0;
  private yy: number = 0;
  private direction: string = "N";

  constructor(xx: number, yy: number, direction: string) {
    this.xx = xx;
    this.yy = yy;
    this.direction = direction;
  }
}

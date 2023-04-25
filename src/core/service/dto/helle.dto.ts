export class HelloDto {
  public intAttr: number;
  public stringAttr: string;

  constructor(intAttr: number, stringAttr: string) {
    this.intAttr = intAttr;
    this.stringAttr = stringAttr;
  }
}

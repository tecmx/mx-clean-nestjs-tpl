import { Hello } from "src/core/domain/hello/entity/hello";

export class HelloDto {
  public intAttr: number;
  public stringAttr: string;

  constructor(entity: Hello) {
    this.intAttr = entity.intAttr;
    this.stringAttr = entity.stringAttr;
  }
}

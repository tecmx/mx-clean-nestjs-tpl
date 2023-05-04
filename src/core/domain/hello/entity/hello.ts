import { IsDate, IsOptional, IsString } from "class-validator";
import { Entity } from "../../../common/entity/Entity";
import { RemovableEntity } from "../../../common/entity/RemovableEntity";
import { Nullable } from "../../../common/type/CommonType";

export class Hello extends Entity<string> implements RemovableEntity {
  @IsString()
  private _intAttr: number;

  @IsString()
  private _stringAttr: string;

  @IsDate()
  private readonly createdAt: Date;

  @IsOptional()
  @IsDate()
  private editedAt: Nullable<Date>;

  @IsOptional()
  @IsDate()
  private removedAt: Nullable<Date>;

  constructor(intAttr: number, stringAttr: string) {
    super();
    this._intAttr = intAttr;
    this._stringAttr = stringAttr;
  }

  get intAttr() {
    return this._intAttr;
  }

  get stringAttr() {
    return this._stringAttr;
  }

  remove(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

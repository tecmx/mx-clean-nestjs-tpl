import { IsDate, IsOptional, IsString } from "class-validator";
import { v4 } from "uuid";
import { Entity } from "../../../common/entity/Entity";
import { RemovableEntity } from "../../../common/entity/RemovableEntity";
import { Nullable } from "../../../common/type/CommonType";
import { CreateHelloEntityPayload } from "./type/CreateHelloEntityPayload";

export class Hello extends Entity<string> implements RemovableEntity {
  @IsString()
  private readonly name: string;

  @IsDate()
  private readonly createdAt: Date;

  @IsOptional()
  @IsDate()
  private editedAt: Nullable<Date>;

  @IsOptional()
  @IsDate()
  private removedAt: Nullable<Date>;

  getName(): string {
    return this.name;
  }
  getCreatedAt(): Date {
    return this.createdAt;
  }
  getEditedAt(): Date {
    return this.editedAt;
  }
  getRemovedAt(): Date {
    return this.removedAt;
  }

  constructor(payload: CreateHelloEntityPayload) {
    super();

    this.name = payload.name || null;

    this.id = payload.id || v4();
    this.createdAt = payload.createdAt || new Date();
    this.editedAt = payload.editedAt || null;
    this.removedAt = payload.removedAt || null;
  }

  public async remove(): Promise<void> {
    this.removedAt = new Date();
    await this.validate();
  }

  public static async new(payload: CreateHelloEntityPayload): Promise<Hello> {
    const post: Hello = new Hello(payload);
    await post.validate();

    return post;
  }
}

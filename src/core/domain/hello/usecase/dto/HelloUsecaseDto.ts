import { Exclude, Expose, plainToClass } from "class-transformer";
import { Hello } from "src/core/domain/hello/entity/hello";
import { Nullable } from "../../../../common/type/CommonType";

@Exclude()
export class HelloUsecaseDto {
  @Expose()
  public id: string;
  public name: string;
  public createdAt: number;
  public editedAt: Nullable<number>;
  public publishedAt: Nullable<number>;
  public static newFromHello(hello: Hello): HelloUsecaseDto {
    const dto: HelloUsecaseDto = plainToClass(HelloUsecaseDto, hello);

    dto.name = hello.getName();
    dto.createdAt = hello.getCreatedAt().getTime();
    dto.editedAt = hello.getEditedAt()?.getTime() || null;

    return dto;
  }
}

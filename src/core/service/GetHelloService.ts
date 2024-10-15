import { Inject, Injectable } from "@nestjs/common";
import { HelloDITokens } from "src/application/di/hello.token";
import { Code } from "../common/code/Code";
import { Exception } from "../common/exception/Exception";
import { CoreAssert } from "../common/util/assert/CoreAssert";
import { Hello } from "../domain/hello/entity/hello";
import { HelloRepositoryPort } from "../domain/hello/port/repository/HelloRepositoryPort";
import { GetHelloPort } from "../domain/hello/port/usecase/GetHelloPort";
import { GetHelloUsecase } from "../domain/hello/usecase/GetHelloUsecase";
import { HelloUsecaseDto } from "../domain/hello/usecase/dto/HelloUsecaseDto";

@Injectable()
export class GetHelloService implements GetHelloUsecase {
  constructor(
    @Inject(HelloDITokens.HelloRepositoryPort)
    private readonly repository: HelloRepositoryPort,
  ) {}

  public async execute(payload: GetHelloPort): Promise<HelloUsecaseDto> {
    const hello: Hello = CoreAssert.notEmpty(
      await this.repository.findHello({ id: payload.helloId }),
      Exception.new({
        code: Code.ENTITY_NOT_FOUND_ERROR,
        overrideMessage: "Post not found.",
      }),
    );

    return HelloUsecaseDto.newFromHello(hello);
  }
}

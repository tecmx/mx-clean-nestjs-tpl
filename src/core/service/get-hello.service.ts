import { Inject, Injectable } from "@nestjs/common";
import { HelloRepositoryPortDI } from "src/application/di/hello.token";
import { Hello } from "../domain/hello/entity/hello";
import { HelloRepositoryPort } from "../domain/hello/port/repository/hello-repository.port";
import { GetHelloUsecase } from "../domain/hello/usecase/get-hello.usecase";
import { HelloDto } from "./dto/helle.dto";

@Injectable()
export class GetHelloService implements GetHelloUsecase {
  constructor(
    @Inject(HelloRepositoryPortDI)
    private readonly repository: HelloRepositoryPort,
  ) {}

  public execute(id: number): HelloDto {
    const hello: Hello = this.repository.getHello(id);
    return new HelloDto(hello);
  }
}

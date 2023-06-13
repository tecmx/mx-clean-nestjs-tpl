import { Controller, Get, Inject, Query } from "@nestjs/common";
import { HelloUsecaseDto } from "src/core/domain/hello/usecase/dto/HelloUsecaseDto";
import { GetHelloUsecase } from "src/core/domain/hello/usecase/GetHelloUsecase";
import { HelloDITokens } from "../di/hello.token";

@Controller()
export class HelloController {
  constructor(
    @Inject(HelloDITokens.HelloRepositoryPort)
    private readonly getHelloUsecase: GetHelloUsecase,
  ) {}

  @Get()
  getHello(@Query("id") id: number): HelloUsecaseDto {
    //return this.getHelloUsecase.execute(id);
    throw new Error("Method not implemented.");
  }
}

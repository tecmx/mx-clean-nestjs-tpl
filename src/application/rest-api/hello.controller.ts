import { Controller, Get, Inject, Query } from "@nestjs/common";
import { HelloRepositoryPortDI } from "../di/hello.token";
import { GetHelloUsecase } from "src/core/domain/hello/usecase/GetHelloUsecase";
import { HelloUsecaseDto } from "src/core/domain/hello/usecase/dto/HelloUsecaseDto";
@Controller()
export class HelloController {
  constructor(
    @Inject(HelloRepositoryPortDI)
    private readonly getHelloUsecase: GetHelloUsecase,
  ) {}

  @Get()
  getHello(@Query("id") id: number): HelloUsecaseDto {
    //return this.getHelloUsecase.execute(id);
    throw new Error("Method not implemented.");
  }
}

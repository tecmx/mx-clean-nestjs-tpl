import { Controller, Get, Inject, Query } from "@nestjs/common";
import { HelloUsecaseDto } from "src/core/domain/hello/usecase/dto/helle-usecase.dto";
import { GetHelloUsecase } from "src/core/domain/hello/usecase/GetHelloUsecase";
import { HelloRepositoryPortDI } from "../di/hello.token";
@Controller()
export class HelloController {
  constructor(
    @Inject(HelloRepositoryPortDI)
    private readonly getHelloUsecase: GetHelloUsecase,
  ) {}

  @Get()
  getHello(@Query("id") id: number): HelloUsecaseDto {
    //return this.getHelloUsecase.execute(id);
  }
}

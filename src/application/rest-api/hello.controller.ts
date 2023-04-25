import { Controller, Get, Put } from "@nestjs/common";
import { GetHelloUsecase } from "src/core/domain/hello/usecase/get-hello.usecase";
import { HelloDto } from "src/core/service/dto/helle.dto";
@Controller()
export class HelloController {
  constructor(private readonly getHelloUsecase: GetHelloUsecase) {}

  @Get()
  getHello(): HelloDto {
    return this.getHelloUsecase.getHello();
  }
}

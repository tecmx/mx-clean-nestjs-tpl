import { Module } from "@nestjs/common";
import { GetHelloService } from "src/core/service/get-hello.service";
import { HelloController } from "../rest-api/hello.controller";

const providers = [GetHelloService];
@Module({
  imports: [],
  controllers: [HelloController],
  providers: [...providers],
})
export class HelloModule {}

import { Module } from "@nestjs/common";
import { HelloModule } from "./application/di/hello.module";

@Module({
  imports: [HelloModule],
})
export class AppModule {}

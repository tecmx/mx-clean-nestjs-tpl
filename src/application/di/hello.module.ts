import { Module } from '@nestjs/common';

const providers = [
    GetHelloService,
    PutHelloService
]
@Module({
  imports: [],
  controllers: [HelloController],
  providers: [...providers],
})
export class HelloModule {}

import { Module } from "@nestjs/common";
import { GetHelloService } from "src/core/service/get-hello.service";
import { TypeOrmHelloRepositoryAdapter } from "src/infrastructure/adapter/persistence/TypeOrmHelloRepositoryAdapter";
import { HelloController } from "../rest-api/hello.controller";
import { GetHelloUsecaseDI, HelloRepositoryPortDI } from "./hello.token";

const repositoryProviders = [
  {
    provide: HelloRepositoryPortDI,
    useClass: TypeOrmHelloRepositoryAdapter,
  },
];

const useCaseProviders = [
  {
    provide: GetHelloUsecaseDI,
    useFactory: (repository) => new GetHelloService(repository),
    inject: [HelloRepositoryPortDI],
  },
];

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [...repositoryProviders, ...useCaseProviders],
})
export class HelloModule {}

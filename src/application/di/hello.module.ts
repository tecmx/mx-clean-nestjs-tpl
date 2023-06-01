import { Module } from "@nestjs/common";
import { HelloController } from "../rest-api/hello.controller";
import { GetHelloUsecaseDI, HelloRepositoryPortDI } from "./hello.token";
import { GetHelloService } from "src/core/service/GetHelloService";
import { TypeOrmHelloRepositoryAdapter } from "src/infrastructure/adapter/persistence/typeorm/TypeOrmHelloRepositoryAdapter";

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

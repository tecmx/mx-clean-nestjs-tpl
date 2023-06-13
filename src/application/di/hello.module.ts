import { Module, Provider } from "@nestjs/common";
import { GetHelloService } from "src/core/service/GetHelloService";
import { TypeOrmHelloRepositoryAdapter } from "src/infrastructure/adapter/persistence/typeorm/TypeOrmHelloRepositoryAdapter";
import { Connection } from "typeorm";
import { HelloController } from "../rest-api/hello.controller";
import { HelloDITokens } from "./hello.token";

const persistenceProviders: Provider[] = [
  {
    provide: HelloDITokens.HelloRepositoryPort,
    useFactory: (connection) =>
      connection.getCustomRepository(TypeOrmHelloRepositoryAdapter),
    inject: [Connection],
  },
];

const useCaseProviders = [
  {
    provide: HelloDITokens.GetHelloUsecaseDI,
    useFactory: (repository) => new GetHelloService(repository),
    inject: [HelloDITokens.HelloRepositoryPort],
  },
];

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [...persistenceProviders, ...useCaseProviders],
})
export class HelloModule {}

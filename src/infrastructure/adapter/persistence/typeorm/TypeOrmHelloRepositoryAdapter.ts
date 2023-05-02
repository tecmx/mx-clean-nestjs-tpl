import { Hello } from "src/core/domain/hello/entity/hello";
import { HelloRepositoryPort } from "src/core/domain/hello/port/repository/hello-repository.port";
import { TypeOrmHello } from "./TypeOrmHello";
import { TypeOrmHelloMapper } from "./TypeOrmHelloMapper";

export class TypeOrmHelloRepositoryAdapter implements HelloRepositoryPort {
  private readonly helloAlias: string = "hello";

  getHello(id: number): Hello {
    throw new Error("Method not implemented.");
  }
  getAllHello(): Hello[] {
    throw new Error("Method not implemented.");
  }
  putHello(payload: Hello): Hello {
    throw new Error("Method not implemented.");
  }
  postHello(hello: Hello): Hello {
    const ormHello: TypeOrmHello = TypeOrmHelloMapper.toOrmEntity(hello);

    const insertResult: InsertResult = await this.createQueryBuilder(
      this.helloAlias,
    )
      .insert()
      .into(TypeOrmHello)
      .values([ormHello])
      .execute();

    return {
      id: insertResult.identifiers[0].id,
    };
  }
  deleteHello(id: number): void {
    throw new Error("Method not implemented.");
  }
}

import { Hello } from "src/core/domain/hello/entity/hello";
import { HelloRepositoryPort } from "src/core/domain/hello/port/repository/hello-repository.port";
import { EntityRepository, InsertResult } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { TypeOrmHello } from "./TypeOrmHello";
import { TypeOrmHelloMapper } from "./TypeOrmHelloMapper";

@EntityRepository(TypeOrmHello)
export class TypeOrmHelloRepositoryAdapter
  extends BaseRepository<TypeOrmHello>
  implements HelloRepositoryPort
{
  private readonly helloAlias: string = "hello";

  public async getHello(id: number): Promise<Hello> {
    throw new Error("Method not implemented.");
  }
  public async getAllHello(): Promise<Hello[]> {
    throw new Error("Method not implemented.");
  }
  public async putHello(payload: Hello): Promise<Hello> {
    throw new Error("Method not implemented.");
  }
  public async postHello(hello: Hello): Promise<Hello> {
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
  public async deleteHello(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

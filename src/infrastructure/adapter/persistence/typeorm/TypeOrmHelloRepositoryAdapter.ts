import { Hello } from "src/core/domain/hello/entity/hello";
import { HelloRepositoryPort } from "src/core/domain/hello/port/repository/HelloRepositoryPort";
import { EntityRepository, SelectQueryBuilder } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { RepositoryFindOptions } from "../../../../core/common/persistence/RepositoryOptions";
import { Optional } from "../../../../core/common/type/CommonType";
import { TypeOrmHello } from "./TypeOrmHello";
import { TypeOrmHelloMapper } from "./TypeOrmHelloMapper";

@EntityRepository(TypeOrmHello)
export class TypeOrmHelloRepositoryAdapter
  extends BaseRepository<TypeOrmHello>
  implements HelloRepositoryPort
{
  private readonly helloAlias: string = "hello";
  private readonly excludeRemovedHelloClause: string = `"${this.helloAlias}"."removedAt" IS NULL`;

  public async findHello(
    by: {
      id?: string;
    },
    options: RepositoryFindOptions = {},
  ): Promise<Hello> {
    let domainEntity: Optional<Hello>;

    const query: SelectQueryBuilder<TypeOrmHello> =
      this.buildHelloQueryBuilder();

    this.extendQueryWithByProperties(by, query);

    if (!options.includeRemoved) {
      query.andWhere(this.excludeRemovedHelloClause);
    }

    const ormEntity: Optional<TypeOrmHello> = await query.getOne();

    if (ormEntity) {
      domainEntity = TypeOrmHelloMapper.toDomainEntity(ormEntity);
    }

    return domainEntity;
  }

  updateHellos(
    values: { helloId?: string },
    by: { helloId?: string },
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async findHellos(): Promise<Hello[]> {
    throw new Error("Method not implemented.");
  }
  public async updateHello(payload: Hello): Promise<Hello> {
    throw new Error("Method not implemented.");
  }

  public async addHello(hello: Hello): Promise<{ id: string }> {
    const ormHello: TypeOrmHello = TypeOrmHelloMapper.toOrmEntity(hello);

    /*const insertResult: InsertResult = await this.createQueryBuilder(
      this.helloAlias,
    )
      .insert()
      .into(TypeOrmHello)
      .values([ormHello])
      .execute();
*/
    return {
      id: "",
    };
  }

  public async removeHello(hello: Hello): Promise<void> {
    await hello.remove();
    const ormHello: TypeOrmHello = TypeOrmHelloMapper.toOrmEntity(hello);
    await this.delete(ormHello);
  }

  private buildHelloQueryBuilder(): SelectQueryBuilder<TypeOrmHello> {
    throw new Error("Method not implemented.");
    //    return this.createQueryBuilder(this.helloAlias).select();
  }

  private extendQueryWithByProperties(
    by: { id?: string },
    query: SelectQueryBuilder<TypeOrmHello>,
  ): void {
    if (by.id) {
      query.andWhere(`"${this.helloAlias}"."id" = :id`, { id: by.id });
    }
  }
}

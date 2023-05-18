import { Hello } from "../../../../core/domain/hello/entity/hello";
import { TypeOrmHello } from "./TypeOrmHello";

export class TypeOrmHelloMapper {
  public static toOrmEntity(domain: Hello): TypeOrmHello {
    const ormHello: TypeOrmHello = new TypeOrmHello();

    ormHello.id = domain.getId();

    ormHello.createdAt = domain.getCreatedAt();
    ormHello.editedAt = domain.getEditedAt() as Date;
    ormHello.removedAt = domain.getRemovedAt() as Date;

    return ormHello;
  }

  public static toDomainEntity(ormHello: TypeOrmHello): Hello {
    const domain: Hello = new Hello({
      id: ormHello.id,
      createdAt: ormHello.createdAt,
      editedAt: ormHello.editedAt,
      removedAt: ormHello.removedAt,
    });

    return domain;
  }

  public static toDomainEntities(ormHellos: TypeOrmHello[]): Hello[] {
    return ormHellos.map((ormHello) => this.toDomainEntity(ormHello));
  }
}

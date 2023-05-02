import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Hello")
export class TypeOrmHello {
  @PrimaryColumn()
  public id: string;

  @Column()
  public title: string;

  @Column()
  public createdAt: Date;

  @Column()
  public editedAt: Date;

  @Column()
  public publishedAt: Date;

  @Column()
  public removedAt: Date;
}

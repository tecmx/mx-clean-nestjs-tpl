import { RepositoryFindOptions } from "../../../../common/persistence/RepositoryOptions";
import { Nullable } from "../../../../common/type/CommonType";
import { Hello } from "../../entity/hello";

export interface HelloRepositoryPort {
  findHello(
    by: {
      id?: string;
    },
    options?: RepositoryFindOptions,
  ): Promise<Hello>;
  findHellos(): Promise<Hello[]>;
  addHello(hello: Hello): Promise<{ id: string }>;
  updateHellos(
    values: { helloId?: Nullable<string> },
    by: { helloId?: string },
  ): Promise<void>;
  removeHello(hello: Hello): Promise<void>;
}

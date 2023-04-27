import { Hello } from "src/core/domain/hello/entity/hello";
import { HelloRepositoryPort } from "src/core/domain/hello/port/repository/hello-repository.port";

export class TypeOrmHelloRepositoryAdapter implements HelloRepositoryPort {
  getHello(id: number): Hello {
    throw new Error("Method not implemented.");
  }
  getAllHello(): Hello[] {
    throw new Error("Method not implemented.");
  }
  putHello(payload: Hello): Hello {
    throw new Error("Method not implemented.");
  }
  postHello(payload: Hello): Hello {
    throw new Error("Method not implemented.");
  }
  deleteHello(id: number): void {
    throw new Error("Method not implemented.");
  }
}

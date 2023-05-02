import { Hello } from "../../entity/hello";

export interface HelloRepositoryPort {
  getAllHello(): Promise<Hello[]>;
  getHello(id: number): Promise<Hello>;
  putHello(payload: Hello): Promise<Hello>;
  postHello(payload: Hello): Promise<Hello>;
  deleteHello(id: number): Promise<void>;
}

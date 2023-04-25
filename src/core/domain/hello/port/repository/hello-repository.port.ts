import { Hello } from '../../entity/hello';

export interface HelloRepositoryPort {
  getAllHello(): Hello[];
  getHello(id: number): Hello;
  putHello(payload: Hello): Hello;
  postHello(payload: Hello): Hello;
  deleteHello(id: number): void;
}

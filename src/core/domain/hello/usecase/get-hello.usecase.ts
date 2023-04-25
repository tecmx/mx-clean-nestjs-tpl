import { HelloDto } from "src/core/service/dto/helle.dto";

export interface GetHelloUsecase {
  execute(id: number): HelloDto;
}

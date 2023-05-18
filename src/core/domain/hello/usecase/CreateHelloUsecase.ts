import { TransactionalUseCase } from "../../../common/usecase/TransactionalUseCase";
import { CreateHelloPort } from "../port/usecase/CreateHelloPort";
import { HelloUsecaseDto } from "./dto/HelloUsecaseDto";

export type CreateHelloUsecase = TransactionalUseCase<
  CreateHelloPort,
  HelloUsecaseDto
>;

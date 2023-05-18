import { TransactionalUseCase } from "../../../common/usecase/TransactionalUseCase";
import { UpdateHelloPort } from "../port/usecase/UpdateHelloPort";
import { HelloUsecaseDto } from "./dto/HelloUsecaseDto";

export type EditPostUseCase = TransactionalUseCase<
  UpdateHelloPort,
  HelloUsecaseDto
>;

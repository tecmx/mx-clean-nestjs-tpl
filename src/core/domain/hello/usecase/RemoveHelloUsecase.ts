import { TransactionalUseCase } from "../../../common/usecase/TransactionalUseCase";
import { RemoveHelloPort } from "../port/usecase/RemoveHelloPort";

export type RemoveHelloUsecase = TransactionalUseCase<RemoveHelloPort, void>;

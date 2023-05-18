import { UseCase } from "../../../common/usecase/UseCase";
import { GetHelloPort } from "../port/usecase/GetHelloPort";
import { HelloUsecaseDto } from "./dto/HelloUsecaseDto";

export type GetHelloUsecase = UseCase<GetHelloPort, HelloUsecaseDto>;

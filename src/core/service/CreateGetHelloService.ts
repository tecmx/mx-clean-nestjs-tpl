import { Hello } from "../domain/hello/entity/hello";
import { HelloRepositoryPort } from "../domain/hello/port/repository/HelloRepositoryPort";
import { CreateHelloPort } from "../domain/hello/port/usecase/CreateHelloPort";
import { CreateHelloUsecase } from "../domain/hello/usecase/CreateHelloUsecase";
import { HelloUsecaseDto } from "../domain/hello/usecase/dto/HelloUsecaseDto";

export class CreateHelloService implements CreateHelloUsecase {
  constructor(private readonly HelloRepository: HelloRepositoryPort) {}

  public async execute(payload: CreateHelloPort): Promise<HelloUsecaseDto> {
    const hello: Hello = await Hello.new({
      name: payload.name,
    });

    await this.HelloRepository.addHello(hello);

    return HelloUsecaseDto.newFromHello(hello);
  }
}

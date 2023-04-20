import { Injectable } from '@nestjs/common';

@Injectable()
export class GetHelloService implements GetHelloUsecase{
    
    constructor(private readonly HelloRepositoryPort: HelloRepository)
    
    public execute(id: number): HelloDto {
        const hello: Hello = this.repository.getHello(id);
        const helloDto new HelloDto(hello);
        return helloDto;
    }
}
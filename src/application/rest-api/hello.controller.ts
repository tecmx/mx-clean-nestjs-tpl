
@Controller()
export class HelloController {
  constructor(
    private readonly puetHelloUsecase: PetHelloUsecase, 
    private readonly getHelloUsecase: GetHelloUsecase
    ) {}

  @Get()
  getHello(): HelloDto {
    return this.getHelloUsecase.getHello();
  }

  @Put()
  putHello(): HelloDto {
    return this.puetHelloUsecase.putHello();
  }
}
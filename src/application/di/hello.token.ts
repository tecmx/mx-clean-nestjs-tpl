export class HelloDITokens {
  public static readonly GetHelloUsecaseDI: unique symbol =
    Symbol("GetHelloUsecase");

  public static readonly HelloRepositoryPort: unique symbol = Symbol(
    "HelloRepositoryPort",
  );
}

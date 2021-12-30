export interface IUseCase<TUseCaseDTO, TUseCaseResultDTO> {
  execute(requestDTO?: TUseCaseDTO): Promise<TUseCaseResultDTO>;
}

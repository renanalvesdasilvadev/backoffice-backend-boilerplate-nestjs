import { IUseCase } from '@/v1/core/common/usecase/usecase';

export interface ITransactionalUseCase<TUseCaseDTO, TUseCaseResultDTO>
  extends IUseCase<TUseCaseDTO, TUseCaseResultDTO> {
  onCommit?: (result: TUseCaseResultDTO, port: TUseCaseDTO) => Promise<void>;
  onRollback?: (error: Error, port: TUseCaseDTO) => Promise<void>;
}

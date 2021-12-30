/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITransactionalUseCase } from '@/v1/core/common/usecase/transactional-usecase';
import { CancelOrderUseCaseRequestDTO } from '../dto/cancel-order-usecase-request.dto';

export interface CancelOrderUseCase
  extends ITransactionalUseCase<CancelOrderUseCaseRequestDTO, boolean> {}

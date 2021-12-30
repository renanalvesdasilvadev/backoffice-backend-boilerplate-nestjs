/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITransactionalUseCase } from '@/v1/core/common/usecase/transactional-usecase';
import { CreateOrderUseCaseRequestDTO } from '../dto/create-order-usecase-request.dto';
import { CreateOrderUseCaseResponseDTO } from '../dto/create-order-usecase-response.dto';

export interface CreateOrderUseCase
  extends ITransactionalUseCase<
    CreateOrderUseCaseRequestDTO,
    CreateOrderUseCaseResponseDTO
  > {}

import { IOrderItemRepository } from '../../domain/order-item/repository/interface/order-item-repository.interface';
import { IOrderPaymentRepository } from '../../domain/order-payment/repository/interface/order-payment-repository.interface';
import { CancelOrderUseCaseRequestDTO } from '../../domain/order/dto/cancel-order-usecase-request.dto';
import { CreateOrderUseCaseResponseDTO } from '../../domain/order/dto/create-order-usecase-response.dto';
import { IOrderRepository } from '../../domain/order/repository/interface/order-repository.interface';
import { CancelOrderUseCase } from '../../domain/order/service/cancel-order-usecase.interface';

export class CancelOrderService implements CancelOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(requestDTO: CancelOrderUseCaseRequestDTO): Promise<boolean> {
    try {
      const entity = requestDTO.toEntity();
      this.orderRepository.update(entity);

      return true;
    } catch (error) {
      return false;
    }
  }
}

import { IOrderItemRepository } from '../../domain/order-item/repository/interface/order-item.repository.interface';
import { IOrderPaymentRepository } from '../../domain/order-payment/repository/interface/order-payment-repository.interface';
import { CreateOrderUseCaseRequestDTO } from '../../domain/order/dto/create-order-usecase-request.dto';
import { CreateOrderUseCaseResponseDTO } from '../../domain/order/dto/create-order-usecase-response.dto';
import { IOrderRepository } from '../../domain/order/repository/interface/order-repository.interface';
import { CreateOrderUseCase } from '../../domain/order/useCases/create-order.usecase.interface';

export class CreateOrderService implements CreateOrderUseCase {
  constructor(
    private orderRepository: IOrderRepository,
    private orderItemRepository: IOrderItemRepository,
    private orderPaymentRepository: IOrderPaymentRepository,
  ) {}

  async execute(
    requestDTO: CreateOrderUseCaseRequestDTO,
  ): Promise<CreateOrderUseCaseResponseDTO> {
    const entity = requestDTO.toEntity();
    this.orderRepository.create(entity);
    entity.items.forEach((orderItem) => {
      this.orderItemRepository.create(orderItem);
    });
    entity.payments.forEach((payment) => {
      this.orderPaymentRepository.create(payment);
    });
    const responseDTO = new CreateOrderUseCaseResponseDTO();
    responseDTO.importEntity(entity);

    return responseDTO;
  }
}

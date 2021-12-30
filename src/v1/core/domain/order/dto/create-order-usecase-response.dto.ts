import { IDTO } from '@/v1/core/common/dto/interface/dto.interface';
import { OrderEntity } from '@/v1/core/domain/order/entity/order.entity';

export class CreateOrderUseCaseResponseDTO implements IDTO<OrderEntity> {
  importEntity(entity: OrderEntity): void {
    throw new Error('Method not implemented.');
  }
  toEntity(): OrderEntity {
    throw new Error('Method not implemented.');
  }
  id: string;
  amount: number;
}

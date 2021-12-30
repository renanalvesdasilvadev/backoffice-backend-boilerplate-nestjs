import { IDTO } from '@/v1/core/common/dto/interface/dto.interface';
import { OrderEntity } from '@/v1/core/domain/order/entity/order.entity';
import { IsNotEmpty } from 'class-validator';

export class CancelOrderUseCaseRequestDTO implements IDTO<OrderEntity> {
  importEntity(entity: OrderEntity): void {
    throw new Error('Method not implemented.');
  }
  toEntity(): OrderEntity {
    throw new Error('Method not implemented.');
  }
  @IsNotEmpty()
  idOrder: string;
}

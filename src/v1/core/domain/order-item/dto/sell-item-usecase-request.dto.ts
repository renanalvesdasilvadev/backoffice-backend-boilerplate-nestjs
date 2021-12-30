import { IDTO } from '@/v1/core/common/dto/interface/dto.interface';
import { OrderEntity } from '@/v1/core/domain/order/entity/order.entity';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class OrderItemDTO implements IDTO<OrderEntity> {
  importEntity(entity: OrderEntity): void {
    throw new Error('Method not implemented.');
  }
  toEntity(): OrderEntity {
    throw new Error('Method not implemented.');
  }
  @IsNotEmpty()
  idProduct: string;
  @IsNotEmpty()
  @IsNumber()
  qty: number;
}

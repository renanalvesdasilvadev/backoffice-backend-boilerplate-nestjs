import { IDTO } from '@/v1/core/common/dto/interface/dto.interface';
import { OrderEntity } from '@/v1/core/domain/order/entity/order.entity';
import { IsCurrency, IsNotEmpty, IsNumber } from 'class-validator';

class OrderItemDTO implements IDTO<OrderEntity> {
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

class OrderPaymentDTO implements IDTO<OrderEntity> {
  importEntity(entity: OrderEntity): void {
    throw new Error('Method not implemented.');
  }
  toEntity(): OrderEntity {
    throw new Error('Method not implemented.');
  }
  @IsNotEmpty()
  idPayment: string;
  @IsNotEmpty()
  @IsCurrency()
  value: number;
}

export class CreateOrderUseCaseRequestDTO implements IDTO<OrderEntity> {
  importEntity(entity: OrderEntity): void {
    throw new Error('Method not implemented.');
  }
  toEntity(): OrderEntity {
    throw new Error('Method not implemented.');
  }
  @IsNotEmpty()
  items: OrderItemDTO[];
  @IsNotEmpty()
  payments: OrderPaymentDTO[];
}

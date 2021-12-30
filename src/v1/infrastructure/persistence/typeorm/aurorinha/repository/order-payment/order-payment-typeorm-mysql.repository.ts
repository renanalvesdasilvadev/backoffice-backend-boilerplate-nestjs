import {
  IPaginationRequest,
  IPaginationResponse,
} from '@/v1/core/common/pagination/interface';
import { FindById } from '@/v1/core/common/type/common-types';
import { OrderPaymentEntity } from '@/v1/core/domain/order-payment/entity/order-payment.entity';
import { IOrderPaymentRepository } from '@/v1/core/domain/product/order-payment-repository.interface';

export class OrderPaymentTypeOrmMySQL implements IOrderPaymentRepository {
  count(filters?: any): Promise<number> {
    throw new Error('Method not implemented.');
  }
  create(object: OrderPaymentEntity): Promise<string> {
    throw new Error('Method not implemented.');
  }
  delete(filters: FindById) {
    throw new Error('Method not implemented.');
  }
  findAllPaginated(
    request: IPaginationRequest<any>,
  ): Promise<IPaginationResponse<OrderPaymentEntity>> {
    throw new Error('Method not implemented.');
  }
  findAll(filters?: any): Promise<OrderPaymentEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(filters: FindById): Promise<OrderPaymentEntity> {
    throw new Error('Method not implemented.');
  }
  update(object: OrderPaymentEntity) {
    throw new Error('Method not implemented.');
  }
}

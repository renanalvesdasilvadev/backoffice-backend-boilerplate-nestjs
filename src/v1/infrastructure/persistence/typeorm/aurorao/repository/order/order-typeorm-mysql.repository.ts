import {
  IPaginationRequest,
  IPaginationResponse,
} from '@/v1/core/common/pagination/interface';
import { FindById } from '@/v1/core/common/type/common-types';
import { OrderEntity } from '@/v1/core/domain/order/entity/order.entity';
import { IOrderRepository } from '@/v1/core/domain/order/repository/interface/order-repository.interface';

export class OrderTypeOrmMySQLRepository implements IOrderRepository {
  count(filters?: any): Promise<number> {
    throw new Error('Method not implemented.');
  }
  create(object: OrderEntity): Promise<string> {
    throw new Error('Method not implemented.');
  }
  delete(filters: FindById) {
    throw new Error('Method not implemented.');
  }
  findAllPaginated(
    request: IPaginationRequest<any>,
  ): Promise<IPaginationResponse<OrderEntity>> {
    throw new Error('Method not implemented.');
  }
  findAll(filters?: any): Promise<OrderEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(filters: FindById): Promise<OrderEntity> {
    throw new Error('Method not implemented.');
  }
  update(object: OrderEntity) {
    throw new Error('Method not implemented.');
  }
}

import {
  IPaginationRequest,
  IPaginationResponse,
} from '@/v1/core/common/pagination/interface';
import { FindById } from '@/v1/core/common/type/common-types';
import { OrderItemEntity } from '@/v1/core/domain/order-item/entity/order-item.entity';
import { IOrderItemRepository } from '@/v1/core/domain/order-item/repository/interface/order-item-repository.interface';

export class OrderItemTypeOrmMySQLRepository implements IOrderItemRepository {
  count(filters?: any): Promise<number> {
    throw new Error('Method not implemented.');
  }
  create(object: OrderItemEntity): Promise<string> {
    throw new Error('Method not implemented.');
  }
  delete(filters: FindById) {
    throw new Error('Method not implemented.');
  }
  findAllPaginated(
    request: IPaginationRequest<any>,
  ): Promise<IPaginationResponse<OrderItemEntity>> {
    throw new Error('Method not implemented.');
  }
  findAll(filters?: any): Promise<OrderItemEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(filters: FindById): Promise<OrderItemEntity> {
    throw new Error('Method not implemented.');
  }
  update(object: OrderItemEntity) {
    throw new Error('Method not implemented.');
  }
}

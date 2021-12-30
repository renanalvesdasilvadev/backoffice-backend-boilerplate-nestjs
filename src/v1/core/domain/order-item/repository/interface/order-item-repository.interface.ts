/* eslint-disable prettier/prettier */
import { IRepository } from "@/v1/core/common/repository/interface/repository.interface";
import { FindById } from "@/v1/core/common/type/common-types";
import { OrderItemEntity } from "@/v1/core/domain/order-item/entity/order-item.entity";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IOrderItemRepository extends IRepository<OrderItemEntity, any, any, FindById, FindById, string> {
    
}
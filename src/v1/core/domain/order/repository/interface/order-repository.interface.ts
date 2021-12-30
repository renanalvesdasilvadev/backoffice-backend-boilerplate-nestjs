/* eslint-disable prettier/prettier */
import { IRepository } from "@/v1/core/common/repository/interface/repository.interface";
import { FindById } from "@/v1/core/common/type/common-types";
import { OrderEntity } from "@/v1/core/domain/order/entity/order.entity";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IOrderRepository extends IRepository<OrderEntity, any, any, FindById, FindById, string> {
    
}
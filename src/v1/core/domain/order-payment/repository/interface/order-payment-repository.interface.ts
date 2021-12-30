/* eslint-disable prettier/prettier */
import { IRepository } from "@/v1/core/common/repository/interface/repository.interface";
import { FindById } from "@/v1/core/common/type/common-types";
import { OrderPaymentEntity } from "@/v1/core/domain/order-payment/entity/order-payment.entity";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IOrderPaymentRepository extends IRepository<OrderPaymentEntity, any, any, FindById, FindById, string> {
    
}
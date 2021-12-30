import { CallDTO } from '@/v1/core/domain/ecommerce-backend-order/dto/call.dto';
import { IEcommerceBackendOrderAdapter } from '@/v1/core/domain/ecommerce-backend-order/adapter/interface/ecommerce-backend-order-adapter.interface';

export class EcommerceBackendOrderAdapter
  implements IEcommerceBackendOrderAdapter
{
  call(dto: CallDTO) {
    throw new Error('Method not implemented.');
  }
}

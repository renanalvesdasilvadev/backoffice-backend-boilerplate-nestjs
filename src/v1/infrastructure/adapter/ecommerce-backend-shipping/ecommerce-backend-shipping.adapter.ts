import { CallDTO } from '@/v1/core/domain/adapter/ecommerce-backend-shipping/dto/call.dto';
import { IEcommerceBackendShippingAdapter } from '@/v1/core/domain/adapter/ecommerce-backend-shipping/interface/ecommerce-backend-shipping-adapter.interface';

export class EcommerceBackendShippingAdapter
  implements IEcommerceBackendShippingAdapter
{
  call(dto: CallDTO) {
    throw new Error('Method not implemented.');
  }
}

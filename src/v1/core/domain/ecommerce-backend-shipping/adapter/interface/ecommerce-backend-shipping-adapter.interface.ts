import { CallDTO } from '../../../ecommerce-backend-order/dto/call.dto';

export interface IEcommerceBackendShippingAdapter {
  call(dto: CallDTO);
}

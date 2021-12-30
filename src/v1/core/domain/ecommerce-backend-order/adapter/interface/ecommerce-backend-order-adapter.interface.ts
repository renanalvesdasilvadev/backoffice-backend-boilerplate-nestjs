import { CallDTO } from '../dto/call.dto';

export interface IEcommerceBackendOrderAdapter {
  call(dto: CallDTO);
}

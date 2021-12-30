import { IDTO } from '@/v1/core/common/dto/interface/dto.interface';
import { ProductEntity } from '../entity/product.entity';

export class ProductResponseDTO implements IDTO<ProductEntity> {
  importEntity(entity: ProductEntity): void {
    throw new Error('Method not implemented.');
  }
  toEntity(): ProductEntity {
    throw new Error('Method not implemented.');
  }
}

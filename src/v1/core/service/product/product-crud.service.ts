import {
  IPaginationRequest,
  IPaginationResponse,
} from '../../common/pagination/interface';
import { FindById } from '../../common/type/common-types';
import { CreateProductUseCaseDTO } from '../../domain/product/dto/create-product-usecase.dto';
import { ProductResponseDTO } from '../../domain/product/dto/product-response.dto';
import { UpdateProductUseCaseDTO } from '../../domain/product/dto/update-product-usecase.dto';
import { IProductCrudUseCase } from '../../domain/product/usecase/interface/product-crud-usecase.interface';

export class ProductCrudService implements IProductCrudUseCase {
  count(filters?: any): Promise<number> {
    throw new Error('Method not implemented.');
  }
  create(object: CreateProductUseCaseDTO): Promise<string> {
    throw new Error('Method not implemented.');
  }
  delete(filters: FindById) {
    throw new Error('Method not implemented.');
  }
  findAllPaginated(
    request: IPaginationRequest<any>,
  ): Promise<IPaginationResponse<ProductResponseDTO>> {
    throw new Error('Method not implemented.');
  }
  findAll(filters?: any): Promise<ProductResponseDTO[]> {
    throw new Error('Method not implemented.');
  }
  findOne(filters: FindById): Promise<ProductResponseDTO> {
    throw new Error('Method not implemented.');
  }
  update(object: UpdateProductUseCaseDTO) {
    throw new Error('Method not implemented.');
  }
}

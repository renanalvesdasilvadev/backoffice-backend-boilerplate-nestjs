/* eslint-disable @typescript-eslint/no-empty-interface */
import { FindById } from '@/v1/core/common/type/common-types';
import { ICrudUseCase } from '@/v1/core/common/usecase/crud-usecase';
import { CreateProductUseCaseDTO } from '../../dto/create-product-usecase.dto';
import { ProductResponseDTO } from '../../dto/product-response.dto';
import { UpdateProductUseCaseDTO } from '../../dto/update-product-usecase.dto';

export interface IProductCrudUseCase
  extends ICrudUseCase<
    CreateProductUseCaseDTO,
    UpdateProductUseCaseDTO,
    ProductResponseDTO,
    any,
    any,
    FindById,
    FindById,
    string
  > {}

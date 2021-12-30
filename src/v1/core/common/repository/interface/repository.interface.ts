import {
  IPaginationRequest,
  IPaginationResponse,
} from '@/v1/core/common/pagination/interface';

export interface IRepository<
  Entity,
  CountFilters,
  FindAllFilters,
  FindOneFilters,
  DeleteFilters,
  PrimaryKeyType,
> {
  count(filters?: CountFilters): Promise<number>;

  create(object: Entity): Promise<PrimaryKeyType>;

  delete(filters: DeleteFilters);

  findAllPaginated(
    request: IPaginationRequest<FindAllFilters>,
  ): Promise<IPaginationResponse<Entity>>;

  findAll(filters?: FindAllFilters): Promise<Entity[]>;

  findOne(filters: FindOneFilters): Promise<Entity>;

  update(object: Entity);
}

import {
  IPaginationRequest,
  IPaginationResponse,
} from '../pagination/interface';

export interface ICrudUseCase<
  CreateDTO,
  UpdateDTO,
  EntityResponseDTO,
  CountFilters,
  FindAllFilters,
  FindOneFilters,
  DeleteFilters,
  PrimaryKeyType,
> {
  count(filters?: CountFilters): Promise<number>;

  create(object: CreateDTO): Promise<PrimaryKeyType>;

  delete(filters: DeleteFilters);

  findAllPaginated(
    request: IPaginationRequest<FindAllFilters>,
  ): Promise<IPaginationResponse<EntityResponseDTO>>;

  findAll(filters?: FindAllFilters): Promise<EntityResponseDTO[]>;

  findOne(filters: FindOneFilters): Promise<EntityResponseDTO>;

  update(object: UpdateDTO);
}

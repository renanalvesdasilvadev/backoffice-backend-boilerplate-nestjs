export interface IPaginationRequest<FilterDTO> {
  filter?: FilterDTO;
  recordsByPage: number;
  page: number;
}

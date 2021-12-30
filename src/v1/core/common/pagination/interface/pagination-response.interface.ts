export interface IPaginationResponse<T> {
  data: T[];
  recordsByPage: number;
  recordsTotal: number;
  pagesTotal: number;
  currentPage: number;
  nextPage: number;
  priorPage: number;
}

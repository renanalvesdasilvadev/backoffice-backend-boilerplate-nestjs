import { IPaginationResponse } from '@/v1/core/common/pagination/interface';

export interface IPagination {
  handle<T>(
    data: T[],
    recordsTotal: number,
    recordsByPage: number,
    currentPage: number,
  ): IPaginationResponse<T>;
  offset(recordsByPage: number, page: number);
}

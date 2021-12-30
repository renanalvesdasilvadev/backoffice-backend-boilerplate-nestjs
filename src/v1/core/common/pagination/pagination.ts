import { Injectable } from '@nestjs/common';
import { IPaginationResponse } from './interface';
import { IPagination } from './interface/pagination.interface';

@Injectable()
export class Pagination implements IPagination {
  handle<T>(
    data: T[],
    recordsTotal: number,
    recordsByPage: number,
    currentPage: number,
  ): IPaginationResponse<T> {
    const pagesTotal =
      Math.trunc(recordsTotal / recordsByPage) +
      (recordsTotal % recordsByPage == 0 ? 0 : 1);

    const pagination: IPaginationResponse<T> = {
      recordsTotal: recordsTotal,
      pagesTotal: pagesTotal,
      nextPage:
        recordsByPage > recordsTotal
          ? 1
          : currentPage < pagesTotal
          ? currentPage + 1
          : currentPage,
      priorPage: currentPage > 1 ? currentPage - 1 : 1,
      currentPage: currentPage,
      recordsByPage: recordsByPage,
      data: data,
    };

    return pagination;
  }

  offset(recordsByPage: number, page: number) {
    return recordsByPage * (page - 1);
  }
}

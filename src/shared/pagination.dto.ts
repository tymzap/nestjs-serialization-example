import { ClassConstructor, Type } from 'class-transformer';

export function PaginationDto<Data>(dataDto: ClassConstructor<Data>) {
  class DecoratedPaginationDto {
    page: number;
    totalPages: number;

    @Type(() => dataDto)
    data: Array<typeof dataDto>;
  }

  return DecoratedPaginationDto;
}

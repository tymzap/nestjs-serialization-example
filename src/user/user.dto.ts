import { Exclude, Expose, Transform } from 'class-transformer';
import { formatDate } from '../shared/format-date';

export class UserDto {
  id: string;
  name: string;

  @Expose({ groups: ['admin'] })
  isActive: boolean;

  @Exclude()
  age: number;

  @Exclude()
  email: string;

  @Transform(({ value }) => formatDate(value))
  createdAt: string;
}

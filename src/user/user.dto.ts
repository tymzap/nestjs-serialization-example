import { Exclude } from 'class-transformer';

export class UserDto {
  id: string;
  name: string;
  isActive: boolean;
  createdAt: string;

  @Exclude()
  age: number;

  @Exclude()
  email: string;
}

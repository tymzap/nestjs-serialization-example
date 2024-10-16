import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { Serialize } from '../shared/serialize.decorator';
import { UserDto } from './user.dto';
import { MockUser } from '../shared/mock-user.decorator';
import { PaginationDto } from '../shared/pagination.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Serialize(UserDto)
  @Get(':id')
  @MockUser(['admin'])
  getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Serialize(PaginationDto(UserDto))
  @Get()
  @MockUser(['admin'])
  getPaginatedUsers() {
    return this.userService.getUsers();
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { Serialize } from '../shared/serialize.decorator';
import { UserDto } from './user.dto';
import { MockUser } from '../shared/mock-user.decorator';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Serialize(UserDto)
  @Get(':id')
  @MockUser(['admin'])
  getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }
}

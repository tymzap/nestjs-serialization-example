import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { Serialize } from '../shared/serialize.decorator';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Serialize(UserDto)
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }
}

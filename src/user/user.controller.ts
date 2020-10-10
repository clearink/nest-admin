import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Req,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/utils/http-exception.filter';
import { UserDto, UserEmailDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:email')
  getUser(@Param('email') params: UserEmailDto) {
    return this.userService.getUser(params.email);
  }

  @Post()
  addUser(@Body() user: UserDto) {
    return this.userService.addUser(user);
  }
}

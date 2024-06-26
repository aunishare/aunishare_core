import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get('/users')
  getMain(): object {
    return this.appService.getUsers();
  }
}

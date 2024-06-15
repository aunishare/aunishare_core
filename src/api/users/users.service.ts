import { Injectable } from '@nestjs/common';
import AppDataSource from '../../orm';
import { User } from '../../orm/entities/user';

@Injectable()
export class UsersService {
  getUsers(): object {
    return AppDataSource.getRepository(User).find();
  }
}

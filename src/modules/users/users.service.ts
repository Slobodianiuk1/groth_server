import { Injectable } from '@nestjs/common';
import { users } from '../../mock/users';
@Injectable()
export class UsersService {
  getUsers () {
    return users
  }
}

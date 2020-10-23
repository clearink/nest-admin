import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}
  public users: User[] = [];

  getUsers() {
    return this.users;
  }
  getUser(name: string) {
    const findUser = this.users.find(user => user.name === name);
    if (findUser) return findUser;
    throw new NotFoundException();
  }

  addUser(user: User) {
    this.users.push(user);
    return user;
  }
}

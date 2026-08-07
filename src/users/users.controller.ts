import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
class UsersController {
  @Get()
  public getUsers() {
    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUsers() {
    return 'You sent a post request to create new user';
  }
}
export default UsersController;

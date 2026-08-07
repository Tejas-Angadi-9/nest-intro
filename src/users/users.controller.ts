import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';

@Controller('users')
class UsersController {
  @Get('/:id{/:optional}')
  public getUser(@Param() params: any, @Query() query: any) {
    console.log(query);

    return `You sent a GET request to get user data ${params.id} and ${params.optional}`;
  }

  @Post()
  public createUsers(@Body() request: any) {
    console.log(request);
    return 'You sent a POST request to create new user';
  }
}
export default UsersController;

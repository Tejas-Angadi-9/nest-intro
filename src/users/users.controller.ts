import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Headers,
  Ip,
} from '@nestjs/common';

@Controller('users')
class UsersController {
  @Get('/:id{/:optional}')
  public getUser(@Param('id') id: any, @Query('limit') limit: any) {
    console.log({ limit });

    return `You sent a GET request to get user data ${id}`;
  }

  @Post()
  public createUsers(
    @Body() request: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log('Headers: ', headers);
    console.log('IP: ', ip);
    console.log(request);
    return 'You sent a POST request to create new user';
  }
}
export default UsersController;

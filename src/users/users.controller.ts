import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import CreateUserDto from './dtos/create-user.dto';

@Controller('users')
class UsersController {
  @Get('{/:id}')
  public getUser(
    @Param('id', ParseIntPipe) id: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: any,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: any,
  ) {
    // console.log({ limit, page });
    console.log(id);
    console.log(limit);
    console.log(page);

    return `You sent a GET request to get user data ${id}`;
  }

  @Post()
  public createUsers(
    @Body() createUserDto: CreateUserDto,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log('Headers: ', headers);
    console.log('IP: ', ip);
    console.log(createUserDto instanceof CreateUserDto);
    return 'You sent a POST request to create new user';
  }
}
export default UsersController;

import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }



  @Get ('/user')
  user() {
    return {
      id: 1,
      name: 'Dima',
      username: 'tguser'
    }
  }



  @Post ()
  createUser (@Body() data: Record<string, string>) {
  console.log(JSON.stringify(data));

  return data;

  }
}
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'very short bla';
  }
}

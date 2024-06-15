import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMain(): object {
    return { message: 'Nothing to see here' };
  }
}

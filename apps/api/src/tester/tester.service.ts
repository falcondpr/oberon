import { Injectable } from '@nestjs/common';

@Injectable()
export class TesterService {
  findAll() {
    return [
      {
        id: 1,
        name: 'Fernando',
        email: 'fer@correo.com',
      },
    ];
  }
}

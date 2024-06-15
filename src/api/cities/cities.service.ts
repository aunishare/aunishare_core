import { Injectable } from '@nestjs/common';
import AppDataSource from '../../orm';
import { City } from '../../orm/entities/city';

@Injectable()
export class CitiesService {
  getCities(): object {
    return AppDataSource.getRepository(City).find();
  }
}

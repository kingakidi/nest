import { Cat } from 'src/interfaces/cat.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: any) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}

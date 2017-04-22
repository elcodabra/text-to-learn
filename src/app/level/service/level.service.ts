import { Injectable } from '@angular/core';
import { Level } from './level.model';
import { LEVELS } from './mock-levels';

@Injectable()
export class LevelService {

  constructor() { }

  getTitles(): Level[] {
    return LEVELS
  }

  getLevel(id): Promise<Level> {
    return Promise.resolve(LEVELS[id])
  }

  getCount(): number {
    return LEVELS.length
  }

}

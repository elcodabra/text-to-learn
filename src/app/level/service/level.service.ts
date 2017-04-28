import { Injectable } from '@angular/core';
import { Level } from './level.model';
import { LEVELS } from './mock-levels';

@Injectable()
export class LevelService {
  private level: Level;

  constructor() { }

  getTitles(): Level[] {
    return LEVELS
  }

  setCurrentLevel(id): Promise<Level> {
    this.level = LEVELS[id];
    return Promise.resolve(this.level);
  }

  getCurrentLevel() {
    return this.level;
  }

  getCount(): number {
    return LEVELS.length
  }

}

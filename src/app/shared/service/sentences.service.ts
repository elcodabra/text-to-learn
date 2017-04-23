import { Injectable } from '@angular/core';

@Injectable()
export class SentencesService {
  private sentences: string[] = ["Тихо над Альгамброй","Дремлет вся натура","Дремлет замок Памбра","Спит Эстремадура"]

  constructor() { }

  setSentences(text): void {
    this.sentences = text.split(".")
  }

  getSentences(): string[] {
    return this.sentences
  }

}

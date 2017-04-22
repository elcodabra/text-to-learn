import { Injectable } from '@angular/core';

@Injectable()
export class SentencesService {
  private sentences: Array<string>

  constructor() { }

  setSentences(text): void {
    console.log("set", text)
    this.sentences = text.split(".")
  }

  getSentences(): Array<string> {
    return this.sentences;
  }

}

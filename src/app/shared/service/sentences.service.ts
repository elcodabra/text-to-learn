import { Injectable } from '@angular/core';

@Injectable()
export class SentencesService {
  private sentences: string[] = ["Тихо над Альгамброй.","Дремлет вся натура.","Дремлет замок Памбра.","Спит Эстремадура."]

  constructor() { }

  setSentences(text): void {
    let sentences = text.replace(/([.?!\n])\s*(?=[A-Za-zА-Яа-я])/g, this.replacer).split("|");
    // TODO: check for 1 word in sentence
    // sentences.forEach((item, index, array) => {
    //   if (item.length > 0 && item.split('\s').length > 1 ) {
    //     this.sentences.push(item);
    //   } else {
    //     this.sentences[this.sentences.length - 1] += item;
    //   }
    // })
    this.sentences = sentences;
  }

  getSentences(): string[] {
    return this.sentences;
  }

  private replacer(match, p): string {
    return (p == '\n' ? '' : match) + '|';
  }

}

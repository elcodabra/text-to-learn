import { Injectable } from '@angular/core';

@Injectable()
export class SentencesService {
  private sentences: string[] = ["As if some little Arctic flower","Upon the polar hem --","Went wandering down the Latitudes","Until it puzzled came","To continents of summer --","To firmaments of sun --","To strange, bright crowds of flowers --","And birds, of foreign tongue!"]

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
  }

  getSentences(): string[] {
    return this.sentences;
  }

  private replacer(match, p): string {
    return (p == '\n' ? '' : match) + '|';
  }

}

import { Injectable } from '@angular/core';


export class TranslationSet {
  public languange: string;
  public values: { [key: string]: string } = {};
}

@Injectable()
export class TranslationService {

  private dictionaries = {
    en: require('../../../dictionaries/en.json'),
    pl: require('../../../dictionaries/pl.json'),
  };

  public languages = Object.keys(this.dictionaries);
  public language = this.languages[0];

  constructor() { }

  translate(value: string): string {
    if (this.dictionaries[this.language][value]) {
      return this.dictionaries[this.language][value];
    }
    return this.dictionaries.en[value];
  }
}

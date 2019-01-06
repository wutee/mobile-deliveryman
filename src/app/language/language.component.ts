import { Component, OnInit } from '@angular/core';
import {TranslationService} from '../translator/translation.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  constructor(
    public translationService: TranslationService
  ) { }

  ngOnInit() {
  }

}

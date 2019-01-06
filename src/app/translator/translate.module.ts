import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';
import { FormsModule } from '@angular/forms';
import {LanguageComponent} from '../language/language.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [TranslatePipe, LanguageComponent],
  exports: [TranslatePipe, LanguageComponent],
})
export class TranslateForChildModule {
}

@NgModule({
  providers: [TranslationService]
})
export class TranslateModule {

  static forRoot() {
    return {
      ngModule: TranslateModule
    };
  }

  static forChild() {
    return {
      ngModule: TranslateForChildModule
    };
  }
}

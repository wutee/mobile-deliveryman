import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageComponent } from './language.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslationService } from '../translator/translation.service';

describe('LanguageComponent', () => {
  let component: LanguageComponent;
  let fixture: ComponentFixture<LanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        IonicModule.forRoot(),
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ TranslationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain at least one langauge', () => {
    expect(fixture.debugElement.nativeElement.querySelectorAll('option').length).toBeGreaterThan(0);
  });

  it('should contain english langauge', () => {
    function containtsOption(select, option) {
      let found = false;
      select.forEach(item => found = found || (item.text === option));
      return found;
    }

    expect(containtsOption(
      fixture.debugElement.nativeElement.querySelectorAll('option'),
      'en'
    )).toEqual(true);
  });
});

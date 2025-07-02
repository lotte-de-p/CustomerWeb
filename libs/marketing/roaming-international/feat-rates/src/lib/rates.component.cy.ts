import { RatesComponent } from './rates.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('RatesComponent', () => {
  it('should render', () => {
    cy.mount(RatesComponent, {
      providers: [{ provide: 'Window', useValue: window }],
      imports: [
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
    });
  });
});

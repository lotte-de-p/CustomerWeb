import { provideMockStore } from '@ngrx/store/testing';
import { provideNgxMask } from 'ngx-mask';
import { MissingDataComponent } from './missing-data.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('MissingDataComponent', () => {
  it('should render', () => {
    cy.mount(MissingDataComponent, {
      providers: [{ provide: 'Window', useValue: window }, provideMockStore({}), provideNgxMask()],
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

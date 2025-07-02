import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SummaryHeaderComponent } from './summary-header.component';

describe('SummaryHeaderComponent', () => {
  let component: SummaryHeaderComponent;
  let fixture: ComponentFixture<SummaryHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryHeaderComponent],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

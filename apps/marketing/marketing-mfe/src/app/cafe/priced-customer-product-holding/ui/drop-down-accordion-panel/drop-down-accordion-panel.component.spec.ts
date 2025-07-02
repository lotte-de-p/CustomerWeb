import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { DropDownAccordionPanelComponent } from './drop-down-accordion-panel.component';
import { NgxsModule } from '@ngxs/store';
import { PricedCphState } from '../../state/priced-cph.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { windowFactory } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('DropDownAccordionPanelComponent', () => {
  let component: DropDownAccordionPanelComponent;
  let fixture: ComponentFixture<DropDownAccordionPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([PricedCphState]),
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownAccordionPanelComponent);
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

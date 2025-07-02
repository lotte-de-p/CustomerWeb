import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { expect } from '@jest/globals';
import { LanguageService } from '@telenet/ng-lib-page';
import { DtvBoxDetailComponent } from './dtv-box-detail.component';
import { SaleType, DtvBoxType } from '@entertainment/dtv-box-management/data-access';

describe('DtvBoxDetailComponent', () => {
  let component: DtvBoxDetailComponent;
  let fixture: ComponentFixture<DtvBoxDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: 'Window',
          useValue: {},
        },
        {
          provide: LanguageService,
          useValue: {
            getLanguage: () => 'EN',
            getLocaleString: () => 'en-BE',
          },
        },
      ],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtvBoxDetailComponent);
    component = fixture.componentInstance;
    component.dtvBox = {
      name: 'HD Digicorder',
      type: DtvBoxType.SIPADAN,
      saleType: SaleType.RENT,
      modelNumber: 'AD2200',
      modelImageName: 'ad2200.png',
      serialNumber: '966313491313',
      macAddress: '00:1A:79:00:00:00',
      id: '916564334',
    };

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });
});

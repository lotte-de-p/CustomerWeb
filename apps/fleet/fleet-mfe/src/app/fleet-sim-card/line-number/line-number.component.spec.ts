import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineNumberComponent } from './line-number.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PhoneNumberTransformService, ConstraintsService } from '@telenet/ng-lib-layout';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UrlService } from '@telenet/ng-lib-page';
import { NavigationMenuService } from './service/navigation-menu-service';
import { expect, jest } from '@jest/globals';

describe('LineNumberComponent', () => {
  let component: LineNumberComponent;
  let fixture: ComponentFixture<LineNumberComponent>;
  let urlService: UrlService;
  let phoneNumberTransformService: PhoneNumberTransformService;
  let constraintsService: ConstraintsService;
  const mockWindow = {
    location: {
      search: '',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LineNumberComponent,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        { provide: 'Window', useValue: mockWindow },
        UrlService,
        PhoneNumberTransformService,
        ConstraintsService,
        NavigationMenuService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineNumberComponent);
    component = fixture.componentInstance;
    urlService = TestBed.inject(UrlService);
    phoneNumberTransformService = TestBed.inject(PhoneNumberTransformService);
    constraintsService = TestBed.inject(ConstraintsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    const mockMsisdn = '0468260645';

    it('should get msisdn from url service', () => {
      jest.spyOn(urlService, 'getParameterByName').mockReturnValue(mockMsisdn);
      jest.spyOn(phoneNumberTransformService, 'autoFormatPhoneNumber').mockReturnValue('0468260645');

      component.ngOnInit();

      expect(phoneNumberTransformService.autoFormatPhoneNumber).toHaveBeenCalledWith('0468260645');
      expect(component.lineNumber).toBe(mockMsisdn);
    });

    it('should not initialize line number if msisdn from url service is empty', () => {
      jest.spyOn(urlService, 'getParameterByName').mockReturnValue(null);
      jest.spyOn(phoneNumberTransformService, 'autoFormatPhoneNumber').mockReturnValue('null');

      component.ngOnInit();

      expect(phoneNumberTransformService.autoFormatPhoneNumber).toHaveBeenCalledTimes(0);
      expect(component.lineNumber).toBeUndefined();
    });

    it('should check if mobile number is valid nationally if phone number transformation returns valid normalized ', () => {
      jest.spyOn(urlService, 'getParameterByName').mockReturnValue(mockMsisdn);
      jest.spyOn(constraintsService, 'isValidNationalMobileNumber').mockReturnValue(true);

      component.ngOnInit();

      expect(component.lineNumber).toBe(mockMsisdn);
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { DisplayPhoneNumberService } from './display-phone-number.service';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';

describe('DisplayPhoneNumberService', () => {
  let service: DisplayPhoneNumberService;
  let transformService: PhoneNumberTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayPhoneNumberService, PhoneNumberTransformService, { provide: 'Window', useValue: {} }],
    });

    service = TestBed.inject(DisplayPhoneNumberService);
    transformService = TestBed.inject(PhoneNumberTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call transform method of PhoneNumberTransformService when formatPhoneNumber is called', () => {
    const phoneNumber = '0467713928';
    jest.spyOn(transformService, 'transform');
    const actual = service.formatPhoneNumber(phoneNumber);
    expect(transformService.transform).toHaveBeenCalledWith('0467713928');
    expect(actual).toBe('0467 71 39 28');
  });
});

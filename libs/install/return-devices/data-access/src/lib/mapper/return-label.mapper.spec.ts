import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { ReturnDevicesMapper } from './return-devices.mapper';
import { jest } from '@jest/globals';
import { ReturnLabelMapper } from './return-label.mapper';

describe('ReturnLabelMapper', () => {
  let returnLabelMapper: ReturnLabelMapper;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [ReturnDevicesMapper, TranslateService],
    });

    returnLabelMapper = TestBed.inject(ReturnLabelMapper);
    translateService = TestBed.inject(TranslateService);

    jest.spyOn(translateService, 'instant');
  });

  it('should be created', () => {
    expect(returnLabelMapper).toBeTruthy();
  });

  it('should map return label', () => {
    const mockReturnLabel = { label: 'label details' };
    const returnLabel = returnLabelMapper.toModel(mockReturnLabel);
    expect(returnLabel).toEqual(mockReturnLabel);
  });
});

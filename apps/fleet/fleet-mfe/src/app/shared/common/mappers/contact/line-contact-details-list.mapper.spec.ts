import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LineContactDetailsListMapper } from './line-contact-details-list.mapper';
import { LineContactDetailsMapper } from './line-contact-details.mapper';
import { expect, jest } from '@jest/globals';

describe('LineContactDetailsListMapper', () => {
  let lineContactDetailsListMapper: LineContactDetailsListMapper;
  let lineContactDetailsMapper: LineContactDetailsMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LineContactDetailsListMapper],
      imports: [HttpClientTestingModule],
    });
    lineContactDetailsListMapper = TestBed.inject(LineContactDetailsListMapper);
    lineContactDetailsMapper = TestBed.inject(LineContactDetailsMapper);
  });

  describe('toModel', () => {
    //     it('should call line contact details mapper', () => {
    //         const rawContactDetails = {
    //             individual: {
    //                 lastname: 'Test lastname',
    //                 firstname: 'Test firstname'
    //             }
    //         } as RawContactDetailsInterfaceData;
    //
    //         const contactDetails = mockResponse.contactdetails;
    //         jest.spyOn(lineContactDetailsMapper, 'toModel').mockReturnValue(contactDetails);
    //
    //         const result = lineContactDetailsListMapper.toModel([rawContactDetails]);
    //
    //         expect(result).toEqual([contactDetails]);
    //     });

    it('should not line contact details mapper for empty raw contact details array', () => {
      jest.spyOn(lineContactDetailsMapper, 'toModel');
      const result = lineContactDetailsListMapper.toModel([]);

      expect(lineContactDetailsMapper.toModel).not.toHaveBeenCalled();
      expect(result).toEqual([]);
    });
  });
  afterEach(() => {
    cleanStylesFromDom();
  });
});

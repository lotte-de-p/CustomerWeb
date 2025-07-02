import { TestBed } from '@angular/core/testing';
import { OfferFacade } from './offer.facade';
import { OfferService } from '../../services/offer.service';
import { of, throwError } from 'rxjs';
import { offerTestFactory } from '../../domain/interfaces/offer.testfactory';

describe('OfferFacade', () => {
  let facade: OfferFacade;
  let offerService: jest.Mocked<OfferService>;

  beforeEach(() => {
    const offerServiceMock = {
      getOfferFromEncodedUrlParameter: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [OfferFacade, { provide: OfferService, useValue: offerServiceMock }],
    });

    facade = TestBed.inject(OfferFacade);
    offerService = TestBed.inject(OfferService) as jest.Mocked<OfferService>;
  });

  it('should return offer from encoded URL parameter', (done) => {
    const expectedOffer = offerTestFactory.build();
    offerService.getOfferFromEncodedUrlParameter.mockReturnValue(of(expectedOffer));

    facade.getOfferFromEncodedUrlParameter().subscribe((offer) => {
      expect(offer).toEqual(expectedOffer);
      done();
    });
  });

  it('should handle error when fetching offer from encoded URL parameter', (done) => {
    const errorResponse = new Error('Error fetching offer');
    offerService.getOfferFromEncodedUrlParameter.mockReturnValue(throwError(() => errorResponse));

    facade.getOfferFromEncodedUrlParameter().subscribe({
      next: () => done.fail('expected an error, not an offer'),
      error: (error) => {
        expect(error).toEqual(errorResponse);
        done();
      },
    });
  });
});

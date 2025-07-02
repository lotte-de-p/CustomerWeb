import { OfferIdUtil } from './offer-id.util';
import { Offer } from '../entities/interfaces/raw-sales-order-request.interface';

describe('OfferIdUtil', () => {
  describe('extractOfferIds', () => {
    it('should return all offer ids from a flat list of offers', () => {
      const offers: Offer[] = [
        { id: '1', type: 'someType' },
        { id: '2', type: 'someType' },
        { id: '3', type: 'someType' },
      ];

      const result = OfferIdUtil.extractOfferIds(offers);
      expect(result).toEqual(['1', '2', '3']);
    });

    it('should return all offer ids from a nested list of offers', () => {
      const offers: Offer[] = [
        { id: '1', type: 'someType', offers: [{ id: '2', type: 'someType' }] },
        { id: '3', type: 'someType' },
      ];

      const result = OfferIdUtil.extractOfferIds(offers);
      expect(result).toEqual(['1', '2', '3']);
    });

    it('should return an empty array when no offers are present', () => {
      const offers: Offer[] = [];

      const result = OfferIdUtil.extractOfferIds(offers);
      expect(result).toEqual([]);
    });

    it('should return an empty array when offers have no ids', () => {
      const offers: Offer[] = [
        { id: '', type: 'someType' },
        { id: undefined, type: 'someType' },
      ];

      const result = OfferIdUtil.extractOfferIds(offers);
      expect(result).toEqual([]);
    });
  });
});

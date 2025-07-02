import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { SellingArgument } from './selling-argument.model';

describe('SellingArgument', () => {
  let sellingArgument: SellingArgument;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
    });
    sellingArgument = new SellingArgument('selling.argument.key.1', 1);
  });

  describe('getKey', () => {
    it('should return the key', () => {
      expect(sellingArgument.key).toBe('selling.argument.key.1');
    });
  });

  describe('getRank', () => {
    it('should return the rank', () => {
      expect(sellingArgument.rank).toBe(1);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

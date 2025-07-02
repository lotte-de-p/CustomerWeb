import { TestBed } from '@angular/core/testing';
import { CustomerInputStore } from './customer-input-store.model';

describe('CustomerInputStore', () => {
  const fiberAddress = {
    zipcode: '2800',
    subMunicipality: 'Mechelen',
    street: 'Dageraadstraat',
    houseNumber: '2',
    addressGeoId: '49edb4e5-aec4-351a-e054-00144f80cbe2',
    boxNumber: '',
    fiberConnectable: true,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [{ provide: 'Window', useValue: {} }],
    });
  });

  describe('enrich', () => {
    it('should return the fiber check address', () => {
      const objStore = {
        fiberCheck: fiberAddress,
      } as unknown as CustomerInputStore;

      const result = new CustomerInputStore().enrich(objStore);

      expect(result).not.toBeNull();
      expect(result['fiberCheck']).toEqual(fiberAddress);
      expect(result.isSuccess).toBeTruthy();
    });
  });
});

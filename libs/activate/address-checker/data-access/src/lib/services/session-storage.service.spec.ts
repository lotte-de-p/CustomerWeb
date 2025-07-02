import { TestBed } from '@angular/core/testing';

import { SessionStorageService } from './session-storage.service';

describe('SessionStorageService', () => {
  let service: SessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return null when key does not exist in sessionStorage', () => {
    const nonExistentKey = 'nonExistentKey';
    const result = service.get(nonExistentKey);
    expect(result).toBeNull();
  });

  it('should return the correct data when the key exists in sessionStorage', () => {
    const key = 'testKey';
    const testData = { name: 'John', age: 30 };
    const testDataString = JSON.stringify(testData);
    sessionStorage.setItem(key, testDataString);

    const result = service.get<{ name: string; age: number }>(key);

    expect(result).toEqual(testData);
  });
});

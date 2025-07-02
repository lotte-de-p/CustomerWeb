import { TestBed } from '@angular/core/testing';
import { EasySwitchFacade } from './easy-switch.facade';

describe('EasySwitchFacade', () => {
  let facade: EasySwitchFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EasySwitchFacade],
    });

    facade = TestBed.inject(EasySwitchFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should return an observable emitting true when submitChoice is called with true', (done) => {
    facade.submitChoice(true).subscribe((result) => {
      expect(result).toBe(true);
      done();
    });
  });

  it('should return an observable emitting true when submitChoice is called with false', (done) => {
    facade.submitChoice(false).subscribe((result) => {
      expect(result).toBe(true);
      done();
    });
  });
});

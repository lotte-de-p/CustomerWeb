import { TestBed } from '@angular/core/testing';
import { EasySwitchService } from './easy-switch.service';
import { Observable } from 'rxjs';

describe('EasySwitchService', () => {
  let service: EasySwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EasySwitchService],
    });

    service = TestBed.inject(EasySwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable when submitEasySwitchChoice is called', () => {
    const result$ = service.submitEasySwitchChoice(true);
    expect(result$).toBeInstanceOf(Observable);
  });

  it('should complete without emitting any values', (done) => {
    service.submitEasySwitchChoice(true).subscribe({
      next: () => {
        fail('Observable should not emit any values');
      },
      error: () => {
        fail('Observable should not emit an error');
      },
      complete: () => {
        done();
      },
    });
  });
});

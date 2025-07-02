import { TestBed } from '@angular/core/testing';
import { HardwarePlanService } from './hardware-plan.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { from } from 'rxjs';

describe('HardwarePlanServiceService', () => {
  let service: HardwarePlanService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HardwarePlanService], // Include the service in the providers
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HardwarePlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch plan data', () => {
    const testData = {};
    const url = 'https://www.test.com/';

    from(service.getHardwarePlan(url)).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });

  it('should cache and return data from the cache', () => {
    const testData = {};
    const url = 'https://www.test.com/';

    from(service.getHardwarePlan(url)).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();

    from(service.getHardwarePlan(url)).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    httpTestingController.expectNone(url);
    httpTestingController.verify();
  });
});

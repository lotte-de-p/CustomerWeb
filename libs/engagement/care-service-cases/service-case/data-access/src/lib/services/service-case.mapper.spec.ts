import { ServiceCaseMapper } from './service-case.mapper';
import { TestBed } from '@angular/core/testing';
import { Status, Type } from '../entitities/service-case.interface';

const creationDate = '2023-10-10T09:30:16.449Z';

describe('ServiceCaseService', () => {
  let mapper: ServiceCaseMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceCaseMapper],
    });
    mapper = TestBed.inject(ServiceCaseMapper);
  });

  it('should get dummy service cases', () => {
    const serviceCases = mapper.toModel([
      {
        id: 'testId1',
        status: 'Open',
        type: 'TakeOver',
        creationDate: creationDate,
        productType: 'Internet',
      },
      {
        id: 'testId2',
        status: 'Resolved',
        type: 'Move',
        creationDate: '2023-10-11T09:00:35.449Z',
        deadlineDate: '2023-10-12T09:00:35.449Z',
        productType: 'DTV',
      },
    ]);
    expect(serviceCases).toEqual([
      {
        id: 'testId1',
        status: Status.OPEN,
        type: Type.TAKEOVER,
        creationDate: new Date(creationDate),
        productType: 'Internet',
      },
      {
        id: 'testId2',
        status: Status.RESOLVED,
        type: Type.MOVE,
        creationDate: new Date('2023-10-11T09:00:35.449Z'),
        deadlineDate: new Date('2023-10-12T09:00:35.449Z'),
        productType: 'DTV',
      },
    ]);
  });

  it('map an invalid status and type', () => {
    const result = mapper.toModel([
      {
        id: 'testId1',
        status: 'UNKNOWN',
        type: 'UNKNOWN',
        creationDate: creationDate,
        productType: 'Internet',
      },
    ]);
    expect(result).toEqual([
      {
        id: 'testId1',
        status: undefined,
        type: undefined,
        creationDate: new Date(creationDate),
        productType: 'Internet',
      },
    ]);
  });
});

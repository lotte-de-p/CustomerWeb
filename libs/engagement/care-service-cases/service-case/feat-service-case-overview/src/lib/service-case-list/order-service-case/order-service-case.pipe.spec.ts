import { OrderByPipe } from './order-service-case.pipe';
import { ServiceCase } from '@care-service-cases/service-case/data-access';

describe('OrderByPipe', () => {
  const creationDate = new Date(2023, 0, 1);
  const serviceCases: ServiceCase[] = [
    {
      id: '1',
      creationDate,
    } as ServiceCase,
    {
      id: '2',
      creationDate,
    } as ServiceCase,
    {
      id: '3',
      creationDate: new Date(2023, 0, 2),
    } as ServiceCase,
  ];

  it('should order the service cases by date descending by default', () => {
    const result = new OrderByPipe().transform(serviceCases);
    expect(result.map((serviceCase) => serviceCase.id)).toEqual(['3', '1', '2']);
  });

  it('should order the service cases by date descending', () => {
    const result = new OrderByPipe().transform(serviceCases, 'desc');
    expect(result.map((serviceCase) => serviceCase.id)).toEqual(['3', '1', '2']);
  });

  it('should order the service cases by date ascending', () => {
    const result = new OrderByPipe().transform(serviceCases, 'asc');
    expect(result.map((serviceCase) => serviceCase.id)).toEqual(['1', '2', '3']);
  });

  it('should return empty list without passing parameters', () => {
    const result = new OrderByPipe().transform();
    expect(result).toEqual([]);
  });
});

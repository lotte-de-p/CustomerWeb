import { Pipe, PipeTransform } from '@angular/core';
import { ServiceCase } from '@care-service-cases/service-case/data-access';

@Pipe({
  name: 'orderBy',
  standalone: true,
})
export class OrderByPipe implements PipeTransform {
  transform(value: ServiceCase[] = [], order: 'asc' | 'desc' = 'desc'): ServiceCase[] {
    return value.sort((a, b) => {
      if (order === 'asc') {
        return a.creationDate.getTime() - b.creationDate.getTime();
      }
      return b.creationDate.getTime() - a.creationDate.getTime();
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'tableHeaderCypressColumnId',
})
export class TableHeaderCypressColumnIdPipe implements PipeTransform {
  transform(value: unknown): string {
    return `sort-${String(value)}`;
  }
}

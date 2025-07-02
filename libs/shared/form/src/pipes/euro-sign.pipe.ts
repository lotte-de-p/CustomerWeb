import { Pipe, PipeTransform } from '@angular/core';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';

@Pipe({
  name: 'euroSign',
  standalone: true,
})
export class EuroSignPipe implements PipeTransform {
  constructor(private readonly languageService: LanguageService) {}

  transform(value: string) {
    const isFrench = this.languageService.getLanguage() === LanguageEnum.FR;

    if (isFrench) {
      return value + '€';
    } else {
      return '€' + value;
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { TranslateHelperService } from '../../service/translate-helper.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'tg-marketing-cafe-bill-price',
  templateUrl: './bill-price.component.html',
  standalone: true,
  imports: [NgIf, TranslateModule],
})
export class BillPriceComponent implements OnInit {
  @Input() price: string;
  integer: string;
  decimal: string;
  isFrench: boolean;

  constructor(
    public translateHelperService: TranslateHelperService,
    private readonly languageService: LanguageService
  ) {}

  ngOnInit(): void {
    const priceArray: string[] = this.price.split('.');
    this.integer = priceArray[0];
    this.decimal = priceArray[1];
    this.isFrench = this.languageService.getLanguage() === LanguageEnum.FR;
  }
}

/* eslint-disable sonarjs/no-duplicate-string */
import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullHardwarePagesComponent } from '../full-hardware-pages/full-hardware-pages.component';
import { SearchResultItem } from '@general/data-access-search';
import { TranslateModule } from '@ngx-translate/core';
import { HardwarePageComponent } from '../hardware-page/hardware-page.component';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'tg-foundation-general-search-blended-hardware-pages',
  standalone: true,
  imports: [CommonModule, FullHardwarePagesComponent, TranslateModule, HardwarePageComponent, SlickCarouselModule],
  template: `
    <div
      class="search__content__header-hardware width--full display--flex align-items--center justify-content--between py--l"
      [attr.data-testid]="'blended-hardware-title'">
      <h4 class="font--body-large heading--4 heading--nomargin">
        {{ 'ng.search-results-page.lbl.hardware' | translate }}
      </h4>
      <a
        *ngIf="(hits?.length ?? 0) > 3"
        href=""
        (click)="filterHardware(); (false)"
        class="link link link--chevron text-decoration--underline"
        ><span>{{ 'ng.search-results-page.lbl.see-all-hardware' | translate }}</span></a
      >
    </div>
    <ngx-slick-carousel #slickModal="slick-carousel" [config]="slideConfig" class="search__content__hardware">
      <ng-container *ngFor="let hit of hits">
        <li
          [attr.data-testid]="'carousel-item'"
          ngxSlickItem
          tg-general-search-hardware-page
          [searchResultItem]="hit"
          [detailsPagePath]="detailsPagePath"
          class="display--flex width--full"></li>
      </ng-container>
    </ngx-slick-carousel>
  `,
})
export class BlendedHardwarePagesComponent implements OnChanges {
  @Input() hits: SearchResultItem[] | undefined | null;
  @Input() detailsPagePath: string;
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  slideConfig = {
    dots: true,
    initialSlide: 0,
    mobileFirst: true,
    arrows: true,
    infinite: false,
    autoplay: false,
    nextArrow:
      '<div class="slick-slider-button slick-slider-button--right cursor--pointer slick-slider-button__highlight background-shape--squarcle--white display--inline-flex justify-content--center align-items--center box-shadow" aria-disabled="false"><i class="icon icon-chevron-right icon-md"></i></div>',
    prevArrow:
      '<div class="slick-slider-button slick-slider-button--left cursor--pointer slick-slider-button__highlight background-shape--squarcle--white display--inline-flex justify-content--center align-items--center box-shadow" aria-disabled="false"><i class="icon icon-chevron-left icon-md"></i></div>',
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['hits']) {
      this.slickModal?.$instance?.slick?.('removeSlide', null, null, true);
      this.slickModal?.$instance?.slick?.('unslick');
      this.slickModal?.$instance?.slick?.('remove');
      this.slickModal?.$instance?.slick?.(this.slideConfig);
    }
  }

  filterHardware() {
    const devicesFilter = document.getElementsByName('tags.category.devices');
    if (devicesFilter && devicesFilter.length > 0) {
      devicesFilter.item(0).click();
    }
  }
}

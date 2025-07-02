import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSrcInterceptorDirective } from '@mybase-dashboard/data-access';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-watch-tv-online',
  standalone: true,
  imports: [CommonModule, TranslateModule, ImageSrcInterceptorDirective],
  templateUrl: './watch-tv-online.component.html',
  styleUrl: './watch-tv-online.component.scss',
})
export class WatchTvOnlineComponent {
  @Input() watchTvUrl: string;
  @Input() watchTvIosUrl: string;
  @Input() watchTvAndroidUrl: string;
  @Input() showSubtitle = false;
  @Input() fullHeight = false;
  @ViewChild('linkToStore') linkToStore: ElementRef;

  watchApp() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
      window.open(this.watchTvIosUrl, '_blank');
    } else if (userAgent.includes('android')) {
      window.open(this.watchTvAndroidUrl, '_blank');
    } else {
      this.linkToStore.nativeElement.showModal();
    }
  }

  watchOnline() {
    window.open(this.watchTvUrl, '_blank');
  }

  closeModal() {
    this.linkToStore.nativeElement.close();
  }
}

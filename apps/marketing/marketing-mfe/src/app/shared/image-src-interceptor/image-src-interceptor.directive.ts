import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ConfigService } from '@telenet/ng-lib-config';

@Directive({
  // Disabled override to override browser functionality
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'img[src]',
  exportAs: 'src',
  standalone: true,
})
export class ImageSrcInterceptorDirective implements OnInit {
  @Input() override = false;

  constructor(
    private readonly el: ElementRef,
    private readonly configService: ConfigService
  ) {}

  getRemoteHost(): string {
    const remoteHostConfig = this.configService.getRemoteHostConfig('MarketingModule');
    return remoteHostConfig?.remoteHost || '';
  }

  ngOnInit(): void {
    if (this.override) {
      return;
    }
    const image: string = this.el.nativeElement.src.split('/').pop();
    const imagePath = window.location.href.includes('localhost')
      ? `${this.getRemoteHost()}/assets/`
      : this.getRemoteHost();
    this.el.nativeElement.src = `${imagePath}${image}`;
  }
}

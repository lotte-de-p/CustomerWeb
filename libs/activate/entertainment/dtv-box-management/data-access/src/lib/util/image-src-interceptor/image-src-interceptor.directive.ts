import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ConfigService } from '@telenet/ng-lib-config';

@Directive({
  standalone: true,
  selector: '[tgEntertainmentDtvBoxImageSrcInterceptor]',
})
export class ImageSrcInterceptorDirective implements OnChanges {
  // imagesRootPath is configured in AEM (eg: /content/dam/www-telenet-touch/nl/common/components/dtv-details)
  // On localhost and storybook, this will be an empty string.
  @Input('tgEntertainmentDtvBoxImageSrcInterceptor') imagesRootPath = '';
  @Input() src = '';

  private readonly moduleId = 'tg-entertainment-dtv-box-overview';

  constructor(
    private readonly el: ElementRef,
    private readonly configService: ConfigService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const source: string = changes['src'].currentValue.replace('/assets/', '');

    if (this.isRemoteHost()) {
      this.el.nativeElement.src = `${this.imagesRootPath}/${source}`;
    } else {
      this.el.nativeElement.src = '/assets/' + source;
    }
  }

  isRemoteHost(): boolean {
    return !!this.configService.getRemoteHostConfig(this.moduleId)?.remoteHost;
  }
}

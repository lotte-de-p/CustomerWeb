import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ConfigService, RemoteHostConfig } from '@telenet/ng-lib-config';

@Directive({
  standalone: true,
  selector: '[tgReturnDevicesImageSrcInterceptor]',
})
export class ImageSrcInterceptorDirective implements OnChanges {
  moduleId = 'tg-return-devices-overview';
  @Input('tgReturnDevicesImageSrcInterceptor') imagePath = '';
  @Input() src = '';

  constructor(
    private readonly el: ElementRef,
    private readonly configService: ConfigService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const remoteHost: string = this.getRemoteHost();

    if (remoteHost) {
      let imagePath: string = changes['src'].currentValue;
      const indexOfAssetsFolder = imagePath.indexOf('/assets');
      if (indexOfAssetsFolder !== -1) {
        imagePath = imagePath.slice(indexOfAssetsFolder);
      }
      this.el.nativeElement.src = `${this.imagePath}${imagePath}`;
    } else {
      if (!this.el.nativeElement.src) {
        this.el.nativeElement.src = changes['src'].currentValue;
      }
    }
  }

  getRemoteHost(): string {
    const remoteHostConfig: Partial<RemoteHostConfig> = this.configService.getRemoteHostConfig(this.moduleId);
    return remoteHostConfig?.remoteHost || '';
  }
}

import { AbstractMapper } from './abstract.mapper';
import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { Label } from '../model/priced-cph-data.model';
import { Injectable } from '@angular/core';
import { SpecificationInterface } from '@telenet/ng-lib-omapi';

@Injectable({
  providedIn: 'root',
})
export class InternetMapper extends AbstractMapper {
  static readonly ICON_WIFI_SIGNAL = 'icon-wifi-signal';

  private readonly _downloadSpeedSpec = 'spec.fixedinternet.speed.download';
  private readonly _downloadVolumeSpec = 'spec.fixedinternet.volume.download.cap';
  private readonly FUP = 'FUP';
  private readonly _serviceCategory = 'serviceCategory';

  constructor() {
    super(InternetMapper.ICON_WIFI_SIGNAL);
  }

  protected getLabel(product: Product, _parent: Product): Label {
    const keyValue =
      product && product.productInfo && this.FUP === product.productInfo.getCharacteristic(this._serviceCategory)
        ? 'ng.product-finder.step-card-offer.unlimited.internet'
        : 'ng.product-finder.step-card-offer.internet';

    return { key: keyValue, args: this.getLabelArgs(product) };
  }

  private getLabelArgs(product: Product): object | undefined {
    const downloadSpeedSpec = this.getSpecOrUndefined(product, this._downloadSpeedSpec);
    const downloadVolumeSpec = this.getSpecOrUndefined(product, this._downloadVolumeSpec);

    let args = {};

    if (downloadSpeedSpec) {
      args = Object.assign(args, { internetSpeed: this.createSpecString(downloadSpeedSpec) });
    }
    if (downloadVolumeSpec && downloadVolumeSpec.value !== this.FUP) {
      args = Object.assign(args, { internetVolume: this.createSpecString(downloadVolumeSpec) });
    }

    return Object.keys(args).length === 0 ? undefined : args;
  }

  private getSpecOrUndefined(product: Product, labelKey: string): SpecificationInterface | undefined {
    return product.productInfo ? product.productInfo.getServiceSpecificationByLabelKey(labelKey) : undefined;
  }

  private createSpecString(spec: SpecificationInterface): string {
    return spec.value + ' ' + spec.unit;
  }
}

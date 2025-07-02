import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { Option } from '../models/option.model';
import { RawOptionInterface } from '../interfaces/raw-product-holding.interface';

@Injectable({
  providedIn: 'root',
})
export class OptionMapper implements MapperInterface<RawOptionInterface, Option> {
  constructor(private readonly omapiMapper: OmapiProductMapper) {}

  toModel(option: RawOptionInterface): Option {
    return this.createOption(option);
  }

  private createOption(rawOption: RawOptionInterface): Option {
    const option = new Option();

    option.label = rawOption.label;
    option.specUrl = rawOption.specurl;
    option.productInfo = this.omapiMapper.toModel(rawOption.rawOmapi);

    return option;
  }
}

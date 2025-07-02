import { Pipe, PipeTransform } from '@angular/core';
import { AssetService } from '@telenet/ng-lib-page';

const ASSET_PATH = 'installation-type/';

@Pipe({ name: 'imagePath', standalone: true })
export class ImagePathPipe implements PipeTransform {
  transform(value: string, brand: string, suffix?: string): string {
    const imageName = ASSET_PATH.concat(value.toLowerCase());
    return AssetService.getImagePath('SALES', imageName, brand) + (suffix ? suffix : '') + '.svg';
  }
}

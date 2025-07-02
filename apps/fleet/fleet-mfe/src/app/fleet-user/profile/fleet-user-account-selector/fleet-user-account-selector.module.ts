import { NgModule } from '@angular/core';
import { ImageSrcPathModule } from '@telenet/ng-lib-page';
import { environment } from '../../../../environments/environment';

@NgModule({
  imports: [ImageSrcPathModule.forRoot(environment.imagePath)],
  exports: [ImageSrcPathModule],
})
export class FleetUserAccountSelectorModule {}

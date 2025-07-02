import { ModuleWithProviders, NgModule } from '@angular/core';
import { ImageSrcPathDirective } from './image-src-path.directive';

@NgModule({
  declarations: [ImageSrcPathDirective],
  imports: [],
  providers: [],
  exports: [ImageSrcPathDirective],
})
export class ImageSrcPathModule {
  static forRoot(imagePath: string): ModuleWithProviders<ImageSrcPathModule> {
    return {
      ngModule: ImageSrcPathModule,
      providers: [{ provide: 'IMAGE_BASE_PATH', useValue: imagePath }],
    };
  }
}

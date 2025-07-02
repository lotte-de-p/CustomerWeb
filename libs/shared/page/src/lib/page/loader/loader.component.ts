import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { LoaderData } from './loaderData.model';
import { PathCategorisationService } from '../path-categorisation/path-categorisation.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-loader',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent implements AfterViewInit {
  @Input() pageType = '';
  @Input() startByDefault = false;
  @Input() enableLoader = false;
  @Input() enableMask = false;

  private readonly pageLoaderID = 'page-loader';

  private readonly loaderObj;
  private readonly messages;

  constructor(
    private readonly loaderService: LoaderService,
    private readonly translate: TranslateService,
    private readonly pathCategorisationService: PathCategorisationService,
    @Inject('Window') private readonly window: Window
  ) {
    this.loaderObj = this.window?.['telenetgroupLoader'];
    this.messages = [
      this.translate.instant('ng.loader.message.sm'),
      this.translate.instant('ng.loader.message.lg'),
      this.translate.instant('ng.loader.message.xlg'),
    ];
  }

  ngAfterViewInit(): void {
    if (this.loaderObj) {
      if (this.startByDefault) {
        this.showPageLoader();
      }

      this.loaderService.loadingStatus
        .pipe(
          untilDestroyed(this),
          map((loaderData: LoaderData) => loaderData.isAPIExecutionInProgress)
        )
        .subscribe((isAPIExecutionInProgress: boolean) => {
          if (isAPIExecutionInProgress) {
            this.showPageLoader();
          } else {
            this.hidePageLoader();
          }
        });
    } else {
      console.error('Loader Plugin not initialised');
    }
  }

  protected showPageLoader(): void {
    const brand = this.pathCategorisationService.getCustomerBrand();
    const options = {
      enable_loader: this.enableLoader,
      enable_mask: this.enableMask,
      loader_message: this.messages,
      brand: brand,
      selector: this.pageLoaderID,
    };
    this.loaderObj.showPageLoader(options);
  }

  private hidePageLoader(): void {
    setTimeout(() => {
      this.loaderObj.hidePageLoader();
    }, 250);
  }
}

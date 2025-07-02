import { Component, inject, Input } from '@angular/core';
import { AsyncPipe, CommonModule, NgOptimizedImage } from '@angular/common';
import { CustomerProfileFacade, CustomerProfileNgrxModule } from '@profile-management/data-access';
import { LoginDetails, LoginModule } from '@telenet/ng-lib-ocapi';
import { ImageSrcInterceptorDirective } from '@profile-management/util';
import { CustomerBrandEnum, PathCategorisationService, UrlService } from '@telenet/ng-lib-page';
import {
  PmProfileOverviewHeaderComponent,
  PmProfileOverviewNavLinksComponent,
  PmProfileOverviewSkeletonComponent,
  ProfileOverviewErrorComponent,
  ProfileOverviewNavLinksUrls,
} from '@profile-management/profile-overview/ui';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CustomerProfileNgrxModule,
    AsyncPipe,
    LoginModule,
    NgOptimizedImage,
    ImageSrcInterceptorDirective,
    PmProfileOverviewHeaderComponent,
    PmProfileOverviewNavLinksComponent,
    PmProfileOverviewSkeletonComponent,
    ProfileOverviewErrorComponent,
  ],
  selector: 'tg-pm-profile-overview',
  templateUrl: './profile-overview.component.html',
})
export class ProfileOverviewComponent {
  private readonly urlService = inject(UrlService);
  private readonly customerProfileFacade = inject(CustomerProfileFacade);
  private readonly pathCategorisationService: PathCategorisationService = inject(PathCategorisationService);

  @Input() profileOverviewUrls = {} as ProfileOverviewNavLinksUrls;

  profileOverview$ = this.customerProfileFacade.profileOverview$;
  loading$ = this.customerProfileFacade.loading$;
  loadError$ = this.customerProfileFacade.loadError$;
  profilePictureUrl: string;
  isMember: boolean;
  isBaseCustomer: boolean;

  initAfterLoggedIn(loginDetails: LoginDetails) {
    this.isMember = loginDetails.isMember();
    this.isBaseCustomer = this.pathCategorisationService.isCustomerOfBrand(CustomerBrandEnum.BRAND_BASE);
    this.customerProfileFacade.loadProfileOverview(loginDetails.identityId);
    this.profilePictureUrl = this.customerProfileFacade.getProfilePicture(loginDetails.identityId);
  }

  handleLinkClick(data: { type: string; link?: string }, isLink?: boolean): void {
    this.customerProfileFacade.sendNavLinkClickedEvent(data.type, data.link, isLink);

    if (data.link) {
      this.urlService.redirectTo(data.link);
    }
  }

  handleErrorAction(): void {
    this.urlService.reloadWindow();
  }
}

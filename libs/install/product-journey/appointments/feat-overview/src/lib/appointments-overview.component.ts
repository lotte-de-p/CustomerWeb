import { AfterViewInit, Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import {
  AppointmentDatalayerService,
  AppointmentFacade,
  AppointmentNgrxModule,
} from '@product-journey/appointments/data-access';
import { CommonModule, DatePipe } from '@angular/common';
import { AppointmentDetailsComponent } from '@product-journey/appointments/feat-appointment-detail';
import { TranslateModule } from '@ngx-translate/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LoginModule, LoginService } from '@telenet/ng-lib-ocapi';
import { CustomerBrandEnum, LoaderModule, PathCategorisationService } from '@telenet/ng-lib-page';
import { MessagesModule } from '@telenet/ng-lib-message';
import { LetDirective } from '@ngrx/component';
import { AppointmentSelectorComponent } from './appointment-selector/appointment-selector.component';
import { AppointmentSkeletonComponent } from '@product-journey/appointments/ui';
import { AdobeAnalyticsDirective, DatalayerEventNames } from '@telenet/ng-lib-datalayer';

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'tg-appointments-overview',
  templateUrl: './appointments-overview.component.html',
  providers: [DatePipe],
  imports: [
    CommonModule,
    AppointmentNgrxModule,
    AppointmentDetailsComponent,
    TranslateModule,
    LoginModule,
    LoaderModule,
    LetDirective,
    MessagesModule,
    AppointmentSelectorComponent,
    AppointmentSkeletonComponent,
    AdobeAnalyticsDirective,
  ],
})
export class AppointmentsOverviewComponent implements OnInit, AfterViewInit {
  private readonly appointmentFacade = inject(AppointmentFacade);
  private readonly loginService = inject(LoginService);
  private readonly pathCategorisationService: PathCategorisationService = inject(PathCategorisationService);
  private readonly appointmentDatalayerService = inject(AppointmentDatalayerService);

  @Input() allowFiberRepairChanges: boolean;
  @Input() usefulInformationInstallUrl: string;
  @Input() usefulInformationMoveUrl: string;
  @Input() usefulInformationRepairUrl: string;
  @Input() postInstallationInstructionMoveUrl: string;
  @Input() postInstallationInstructionRepairUrl: string;
  @Input() postInstallationInstructionInstallUrl: string;
  @Input() usefulInformationFiberInstallUrl: string;
  @Input() usefulInformationFiberMoveUrl: string;
  @Input() usefulInformationFiberRepairUrl: string;
  @Input() postInstallationInstructionFiberMoveUrl: string;
  @Input() postInstallationInstructionFiberRepairUrl: string;
  @Input() postInstallationInstructionFiberInstallUrl: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;
  @Input() pageType: string;
  @ViewChild('noAppointmentsNotification') noAppointmentsNotification!: HTMLDivElement;

  readonly scopes = ['appointments'];
  readonly messageGroupName = 'appointments';
  readonly appointments$ = this.appointmentFacade.appointments$;
  readonly appointmentDetailsLoaded$ = this.appointmentFacade.appointmentDetailsLoaded$;
  readonly outdoorAppointments$ = this.appointmentFacade.outdoorAppointment$;
  readonly error$ = this.appointmentFacade.appointmentError$;
  isMaster = false;
  isBaseCustomer = false;

  ngOnInit(): void {
    this.getUserDetails();
    this.isBaseCustomer = this.pathCategorisationService.isCustomerOfBrand(CustomerBrandEnum.BRAND_BASE);
  }

  initAfterLoggedIn(): void {
    this.appointmentFacade.loadAppointments();
    this.appointmentFacade.loadOutdoorAppointment();
  }

  ngAfterViewInit() {
    if (this.noAppointmentsNotification) {
      this.appointmentDatalayerService.sendNoAppointmentPlannedEvent();
    }
  }

  private getUserDetails(): void {
    this.loginService
      .getLoginDetails()
      .pipe(untilDestroyed(this))
      .subscribe((loginDetails) => {
        this.isMaster = loginDetails.isMaster() || loginDetails.isContractHolder();
      });
  }

  protected readonly DatalayerEventNames = DatalayerEventNames;
}

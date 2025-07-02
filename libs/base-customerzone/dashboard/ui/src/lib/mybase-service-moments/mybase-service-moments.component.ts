import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  MappedServiceMoments,
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerAttributeData,
  MyBaseDashboardDatalayerAttributeGroup,
  MyBaseDashboardDatalayerAttributeName,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
  ServiceMoments,
  ServiceMomentsType,
  SubType,
} from '@mybase-dashboard/data-access';
import { UrlService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-mybase-service-moments',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mybase-service-moments.component.html',
  styleUrl: './mybase-service-moments.component.scss',
})
export class MyBaseServiceMomentsComponent {
  private readonly translateService = inject(TranslateService);
  private readonly urlService: UrlService = inject(UrlService);
  private readonly datePipe = inject(DatePipe);

  @Input({ required: true }) set data(sm: ServiceMoments[]) {
    if (sm.length) {
      sm.forEach((moment) => {
        switch (moment.type) {
          case ServiceMomentsType.SIM_ACTIVATION:
            this.attributeData.push(MyBaseDashboardDatalayerAttributeData.ACTIVATE_SIM);
            this.mappedServiceMoments.push({
              title: this.translateService.instant('ng.mybase-dashboard.service-moments.sim-activation.title'),
              subTitle: this.translateService.instant('ng.mybase-dashboard.service-moments.sim-activation.subtitle'),
              buttonText: this.translateService.instant('ng.mybase-dashboard.service-moments.sim-activation.button'),
              icon: 'icon-sim-card',
              type: moment.type,
              url: this.simActivationUrl,
              msisdn: moment.msisdn,
              attributeData: MyBaseDashboardDatalayerAttributeData.ACTIVATE_SIM,
              attributeGroup: MyBaseDashboardDatalayerAttributeGroup.ACTIVATE,
              subType: SubType.SIM_ACTIVATION,
            });
            break;
          case ServiceMomentsType.ESIM_ACTIVATION:
            this.attributeData.push(MyBaseDashboardDatalayerAttributeData.ACTIVATE_SIM);
            this.mappedServiceMoments.push({
              title: this.translateService.instant('ng.mybase-dashboard.service-moments.esim-activation.title'),
              subTitle: this.translateService.instant('ng.mybase-dashboard.service-moments.esim-activation.subtitle'),
              buttonText: this.translateService.instant('ng.mybase-dashboard.service-moments.esim-activation.button'),
              icon: 'icon-sim-card',
              type: moment.type,
              url: this.eSimActivationUrl,
              msisdn: moment.msisdn,
              attributeData: MyBaseDashboardDatalayerAttributeData.ACTIVATE_SIM,
              attributeGroup: MyBaseDashboardDatalayerAttributeGroup.ACTIVATE,
              subType: SubType.ESIM_ACTIVATION,
            });
            break;
          case ServiceMomentsType.APPOINTMENT: {
            this.attributeData.push(MyBaseDashboardDatalayerAttributeData.INSTALLATION_APPOINTMENT);
            let subTitle = this.translateService.instant(
              'ng.mybase-dashboard.service-moments.unplannend-appointment.subtitle'
            );
            let subType = SubType.UNPLANNED_APPOINTMENT;

            if (moment.timeslot) {
              subTitle = this.translateService.instant(
                'ng.mybase-dashboard.service-moments.plannend-appointment.subtitle',
                {
                  start: this.datePipe.transform(moment?.timeslot?.start, 'dd MMMM yyyy HH:mm'),
                  end: this.datePipe.transform(moment?.timeslot?.end, 'dd MMMM yyyy HH:mm'),
                }
              );
              subType = SubType.PLANNED_APPOINTMENT;
            }
            this.mappedServiceMoments.push({
              title: this.translateService.instant('ng.mybase-dashboard.service-moments.appointment.title'),
              subTitle: subTitle,
              buttonText: this.translateService.instant('ng.mybase-dashboard.service-moments.appointment.button'),
              icon: 'icon-calendar',
              type: moment.type,
              url: this.appointmentUrl,
              attributeData: MyBaseDashboardDatalayerAttributeData.INSTALLATION_APPOINTMENT,
              attributeGroup: MyBaseDashboardDatalayerAttributeGroup.VIEW_DETAILS,
              subType: subType,
            });
            break;
          }
          default:
            break;
        }
      });
      // This is done in case we have to show multiple service moments. For now we only show one
      this.attributeData.forEach((data) => this.sendAnalytics(data, false));
    }
  }
  @Input() simActivationUrl!: string;
  @Input() eSimActivationUrl!: string;
  @Input() appointmentUrl!: string;

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  mappedServiceMoments: MappedServiceMoments[] = [];
  attributeData: string[] = [];

  redirectTo(url: string, attData: string, attGrp: string, msisdn?: string) {
    const finalUrl = msisdn ? `${url}?msisdn=${msisdn}` : url;
    this.sendAnalytics(attData, true, attGrp, finalUrl);
    this.urlService.redirectTo(finalUrl);
  }

  sendAnalytics(attributeData: string, isClick: boolean, attributeGroup?: string, destinationUrl?: string) {
    const event: MyBaseDashboardDatalayer = {
      eventName: isClick
        ? MyBaseDashboardDatalayerEventName.STATUS_CARD_CLICKED
        : MyBaseDashboardDatalayerEventName.STATUS_CARD_VIEWED,
      eventType: isClick ? MyBaseDashboardDatalayerEventType.CLICK : MyBaseDashboardDatalayerEventType.IMPRESSION,
      attributeData: attributeData,
      attributeName: MyBaseDashboardDatalayerAttributeName.SERVICE_MOMENT,
      attributeGroup: isClick ? attributeGroup : undefined,
      destinationUrl: destinationUrl,
    };
    this.analyticsData.emit(event);
  }
}

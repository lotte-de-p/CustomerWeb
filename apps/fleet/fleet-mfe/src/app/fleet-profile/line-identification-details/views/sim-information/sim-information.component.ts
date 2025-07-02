import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { filter, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LineIdentificationDetailsConstants } from '../../constants/line-identification-details.constants';
import { SimDetailsModel } from '../../models/sim-details.model';
import { SimDetailsService } from '../../../../shared/common/services/sim-details/sim-details.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'tg-sim-information',
  templateUrl: './sim-information.component.html',
  standalone: true,
  imports: [NgIf, TranslateModule, AsyncPipe],
})
export class SimInformationComponent extends AbstractBaseComponent implements OnInit {
  simDetailsModel$: Observable<SimDetailsModel>;
  simTypeLabelKey: string;
  @Input() msisdn: string;
  @Output() simDetailsStatus = new EventEmitter<string>();

  constructor(private readonly simDetailsService: SimDetailsService) {
    super();
  }

  ngOnInit(): void {
    if (!this.msisdn) {
      return;
    }
    this.simDetailsModel$ = this.simDetailsService
      .getSimDetailsByMsisdn(LineIdentificationDetailsConstants.MESSAGE_GROUP, this.msisdn)
      .pipe(
        filter((simDetailsModels) => !!simDetailsModels),
        map((simDetailsModels) => simDetailsModels[0]),
        tap((simDetailsModel): void => {
          this.simDetailsStatus.emit(simDetailsModel.status);
          if (simDetailsModel.simType) {
            this.simTypeLabelKey = this.getSimTypeLabelKey(simDetailsModel.simType);
          }
        })
      );
  }

  private getSimTypeLabelKey(simType: string): string {
    return (
      LineIdentificationDetailsConstants.LABEL_KEY_PREFIX +
      this.getSimTypeKey(simType) +
      LineIdentificationDetailsConstants.LABEL_KEY_SUFFIX
    );
  }

  private getSimTypeKey(simType: string): string {
    return simType.toLowerCase().replace('_', '-');
  }
}

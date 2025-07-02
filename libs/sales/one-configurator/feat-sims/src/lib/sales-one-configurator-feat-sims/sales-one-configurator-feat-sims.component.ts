import { ChangeDetectionStrategy, Component, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import {
  OneConfiguratorNgrxModule,
  SimsFacade,
  SimsState,
  UsageTypeEnum,
  UsageTypeUpdate,
} from '@sales/one-configurator/data-access';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '@telenet/ng-lib-page';

@Pipe({ name: 'price', standalone: true })
export class PricePipe implements PipeTransform {
  transform(amount: number, locale: string): string | null {
    return (
      (amount >= 0 ? '+' : '-') +
      ' ' +
      (new CurrencyPipe(locale).transform(Math.abs(amount), 'EUR', 'symbol', '1.2-2') || '')
    );
  }
}

@Component({
  selector: 'tg-sales-one-configurator-feat-sims',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  templateUrl: './sales-one-configurator-feat-sims.component.html',
  imports: [OneConfiguratorNgrxModule, AsyncPipe, TranslateModule, PricePipe],
})
export class SalesOneConfiguratorFeatSimsComponent {
  readonly UsageTypeEnum = UsageTypeEnum;
  readonly enabled$: Observable<boolean> = this.simsFacade.enabled$;
  readonly simsState$: Observable<SimsState> = this.simsFacade.simsState$;
  readonly locale: string = this.languageService.getLocaleString();

  constructor(
    private readonly simsFacade: SimsFacade,
    private readonly languageService: LanguageService
  ) {}

  addSim(): void {
    this.simsFacade.addSim();
  }

  removeSim(): void {
    this.simsFacade.removeSim();
  }

  updateUsageType(index: number, usageType: UsageTypeEnum): void {
    const updatedSims: UsageTypeUpdate = {
      index,
      usageType,
    };
    this.simsFacade.updateUsageType(updatedSims);
  }
}

import { Component } from '@angular/core';
import { SalesOneConfiguratorFeatSimsComponent } from '@sales/one-configurator/sims';
import { Message, MessageBusService } from '@telenet/ng-lib-personalisation';
import { Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  enable,
  OneConfiguratorSlice,
  updateEntertainmentPacks,
  updateEntertainmentProduct,
  updateOptins,
  updateStreamingServices,
  updateTier,
} from '@sales/one-configurator/data-access';

@Component({
  selector: 'tg-sales-one-configurator',
  standalone: true,
  templateUrl: './one-configurator.component.html',
  imports: [SalesOneConfiguratorFeatSimsComponent],
})
export class OneConfiguratorComponent {
  constructor(
    private readonly messageBusService: MessageBusService,
    private readonly store: Store<OneConfiguratorSlice>
  ) {
    this.messageBusService.messageBus$
      .pipe(takeUntilDestroyed())
      // https://github.com/cartant/eslint-plugin-rxjs-angular/issues/16#issue-1695813984
      // eslint-disable-next-line rxjs-angular/prefer-takeuntil
      .subscribe((message: Message) => {
        const payload = JSON.parse(message.payloadAsJson);
        switch (message.type) {
          case '[tcp.angular] update tier':
            this.store.dispatch(updateTier({ tier: payload.tier }));
            break;
          case '[tcp.angular] update entertainmentProductId':
            this.store.dispatch(
              updateEntertainmentProduct({
                entertainmentProduct:
                  payload.entertainmentProductId !== 'no-entertainment-product' ? payload.entertainmentProductId : null,
              })
            );
            break;
          case '[tcp.angular] update options':
            this.store.dispatch(updateEntertainmentPacks({ entertainmentPacks: payload.options }));
            break;
          case '[tcp.angular] update streamingServices':
            this.store.dispatch(updateStreamingServices({ streamingServices: payload.streamingServices }));
            break;
          case '[tcp.angular] update optins':
            this.store.dispatch(
              updateOptins({ optins: !payload.optins.includes('no-optin-id') ? payload.optins : [] })
            );
            break;
          case '[tcp.angular] finished initialization':
            this.store.dispatch(enable());
            break;
        }
      });
  }
}

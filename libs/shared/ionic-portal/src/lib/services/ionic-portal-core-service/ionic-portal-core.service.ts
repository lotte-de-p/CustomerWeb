import { Injectable } from '@angular/core';
import { PortalMessage, SubscriptionCallback, getInitialContext, publish, subscribe } from '@ionic/portals';
import { PluginListenerHandle } from '@capacitor/core';
import { InitialContextKeysEnum } from '../../enums';
import { LanguageEnum } from '@telenet/ng-lib-page';

@Injectable({
  providedIn: 'root',
})
export class IonicPortalCoreService {
  getContextValueByKey<T = unknown>(key: string): T | null {
    const context = getInitialContext<{ [key: string]: T }>();

    if (context?.value && key in context.value) {
      return context.value[key];
    }

    return null;
  }

  async publishToTopic<TData>(topic: string, data?: TData): Promise<void> {
    const message: PortalMessage<TData> = {
      topic,
      data,
    };
    await publish(message);
  }

  subscribeToTopic<TData>(topic: string, callback: SubscriptionCallback<TData>): Promise<PluginListenerHandle> {
    return subscribe(topic, callback);
  }

  get inputs(): object {
    const inputs = this.getContextValueByKey(InitialContextKeysEnum.INPUTS) as string;
    return inputs ? JSON.parse(inputs) : null;
  }

  get selectedLanguage(): string {
    return this.getContextValueByKey(InitialContextKeysEnum.LANGUAGE) || LanguageEnum.NL;
  }
}

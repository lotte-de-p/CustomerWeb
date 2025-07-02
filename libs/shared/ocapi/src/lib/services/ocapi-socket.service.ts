import { Injectable } from '@angular/core';
import SockJS from 'sockjs-client';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { Observable } from 'rxjs';
import { RxStomp, RxStompConfig } from '@stomp/rx-stomp';

@Injectable({
  providedIn: 'root',
})
export class OcapiSocketService {
  baseUrl: string;
  isAnonymous = false;
  TOPIC_PREFIX: string;
  ANONYMOUS_TOPIC_PREFIX: string;
  stompClient: RxStomp;
  private isInitialised: boolean;

  constructor(readonly configService: ConfigService) {
    this.TOPIC_PREFIX = '/user/topic/';
    this.ANONYMOUS_TOPIC_PREFIX = '/topic/action/';
    this.baseUrl = configService.getConfig(ConfigConstants.OCAPI_URl) + '/notify/';
    this.isInitialised = false;
  }

  init(): void {
    this.initializeWebSocketConnection();
    this.isInitialised = true;
  }

  setAnonymous(anonymous: boolean) {
    this.isAnonymous = anonymous;
  }

  getTopicPrefix(): string {
    return this.isAnonymous ? this.ANONYMOUS_TOPIC_PREFIX : this.TOPIC_PREFIX;
  }

  initializeWebSocketConnection(): void {
    this.stompClient = new RxStomp();

    const stompConfig: RxStompConfig = {
      webSocketFactory: () => {
        return new SockJS(this.baseUrl);
      },
    };

    this.stompClient.configure(stompConfig);
    this.stompClient.activate();
  }

  watchStompClientOnTopic(topic: string): Observable<unknown> {
    if (!this.isInitialised) {
      this.init();
    }

    return this.stompClient.watch(this.getTopicPrefix() + topic);
  }
}

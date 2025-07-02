import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

// this service is used by ONE configurator to sync state between monorepo and tcp.angular (https://jira.rel.apps.telenet.be/browse/DIGSALE1TM-1140)
@Injectable({
  providedIn: 'root',
})
export class MessageBusService {
  messageBus$ = new ReplaySubject<Message>(1_000);
}

export interface Message {
  type: string;
  payloadAsJson: string;
}

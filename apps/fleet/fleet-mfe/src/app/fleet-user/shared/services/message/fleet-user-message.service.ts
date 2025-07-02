import { Injectable } from '@angular/core';
import last from 'lodash-es/last';
import split from 'lodash-es/split';
import { ErrorMessage, MessageService, SuccessMessage } from '@telenet/ng-lib-message';

@Injectable({
  providedIn: 'root',
})
export class FleetUserMessageService {
  constructor(private readonly messageService: MessageService) {}

  public showError(ocapiError: string, messageGroup: string): void {
    ocapiError = last(split(ocapiError, '|')).trim();
    this.addErrorMessages(ocapiError, messageGroup);
  }

  private addErrorMessages(ocapiError: string, messageGroup: string): void {
    this.messageService.clearMessages(messageGroup);
    this.messageService.addMessage(new ErrorMessage(messageGroup, ocapiError));
  }

  public showSuccess(messageGroup: string, messageType: string) {
    this.messageService.clearMessages(messageGroup);
    this.messageService.addMessage(new SuccessMessage(messageGroup, messageType));
  }
}

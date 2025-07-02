import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { TelenetMissingTranslationService } from './missing-translation.service';

@Injectable({
  providedIn: 'root',
})
export class TelenetMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return this.telenetMissingTranslationService.notTranslated(params.key);
  }

  constructor(private readonly telenetMissingTranslationService: TelenetMissingTranslationService) {}
}

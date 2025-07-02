import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private _dashboardLink: string;
  private _thankYouDescriptionLink: string;
  private _privacyLink: string;

  get dashboardLink(): string {
    return this._dashboardLink;
  }

  set dashboardLink(value: string) {
    this._dashboardLink = value;
  }

  get thankYouDescriptionLink(): string {
    return this._thankYouDescriptionLink;
  }

  set thankYouDescriptionLink(value: string) {
    this._thankYouDescriptionLink = value;
  }

  get privacyLink(): string {
    return this._privacyLink;
  }

  set privacyLink(value: string) {
    this._privacyLink = value;
  }
}

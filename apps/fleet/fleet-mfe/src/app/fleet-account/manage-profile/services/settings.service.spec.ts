import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setting and getting values', () => {
    it('should set and get _dashboardLink', () => {
      service.dashboardLink = '_dashboardLink';
      expect(service.dashboardLink).toBe('_dashboardLink');
    });

    it('should set and get _thankYouDescriptionLink', () => {
      service.thankYouDescriptionLink = '_thankYouDescriptionLink';
      expect(service.thankYouDescriptionLink).toBe('_thankYouDescriptionLink');
    });

    it('should set and get _thankYouDescriptionLink', () => {
      service.privacyLink = '_privacyLink';
      expect(service.privacyLink).toBe('_privacyLink');
    });
  });
});

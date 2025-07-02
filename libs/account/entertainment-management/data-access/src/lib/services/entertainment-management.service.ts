import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { EntertainmentManagement, EntertainmentOption } from '../entities/entertainment-management.interface';

@Injectable({
  providedIn: 'root',
})
export class EntertainmentManagementService {
  mock_reply = {} as EntertainmentManagement;
  private static readonly MESSAGE_GROUP = 'entertainment-management';
  private static readonly ENDPOINT = '/public/api/customer-web-account-entertainment-management-cs/v1';

  constructor(private readonly ocapiService: OcapiService) {}

  loadEntertainmentManagementOptions(): Observable<EntertainmentManagement> {
    const endpoint = EntertainmentManagementService.ENDPOINT + `/entertainment-options`;
    return this.ocapiService.doGet(
      new OcapiCallConfig<EntertainmentManagement, EntertainmentManagement>(
        EntertainmentManagementService.MESSAGE_GROUP,
        endpoint
      )
    );
  }

  loadEntertainmentOptionDetails(): Observable<EntertainmentOption> {
    const endpoint = EntertainmentManagementService.ENDPOINT + `/entertainment-option-details`;
    return this.ocapiService.doGet(
      new OcapiCallConfig<EntertainmentOption, EntertainmentOption>(
        EntertainmentManagementService.MESSAGE_GROUP,
        endpoint
      )
    );
  }
}

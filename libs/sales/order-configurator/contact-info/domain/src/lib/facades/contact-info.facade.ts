import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactInfo } from '../interfaces/contact-info.interface';
import { contactInfoTestfactory } from '../interfaces/contact-info.testfactory';

@Injectable({
  providedIn: 'root',
})
export class ContactInfoFacade {
  getContactInfo(): Observable<ContactInfo> {
    return of(contactInfoTestfactory.build());
  }
}

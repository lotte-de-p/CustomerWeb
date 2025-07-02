import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { EventFacade } from '@sales/events/data-access';
import { MockWindow } from '@stencil/core/mock-doc';
import { InstallationAddressSummaryComponent } from './installation-address-summary.component';

describe('InstallationAddressSummaryComponent', () => {
  let component: InstallationAddressSummaryComponent;
  let fixture: ComponentFixture<InstallationAddressSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        TranslateModule.forRoot(), // Ensure necessary modules are imported
      ],
      providers: [
        { provide: 'Window', useValue: MockWindow },
        provideMockStore(),
        { provide: EventFacade, useValue: { triggerEvent: jest.fn() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InstallationAddressSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstallationTypeCardComponent } from './installation-type-card.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { installationTypeTestFactory } from '@sales/order-configurator/installation-type/domain';

describe('InstallationTypeCardComponent', () => {
  let component: InstallationTypeCardComponent;
  let fixture: ComponentFixture<InstallationTypeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore(), { provide: 'Window', useValue: {} }],
      imports: [
        InstallationTypeCardComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InstallationTypeCardComponent);

    component = fixture.componentInstance;
    component.installationType = installationTypeTestFactory.build();
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});

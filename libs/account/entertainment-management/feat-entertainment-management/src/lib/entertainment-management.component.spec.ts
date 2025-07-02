import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';
import { EntertainmentManagementComponent } from './entertainment-management.component';
import { EntertainmentManagementFacade } from '@entertainment-management/data-access';

describe('EntertainmentManagementComponent', () => {
  let component: EntertainmentManagementComponent;
  let fixture: ComponentFixture<EntertainmentManagementComponent>;
  let facade: EntertainmentManagementFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EntertainmentManagementComponent,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
      ],
      providers: [{ provide: 'Window', useValue: window }],
    }).compileComponents();

    fixture = TestBed.createComponent(EntertainmentManagementComponent);
    facade = TestBed.inject(EntertainmentManagementFacade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initAfterLoggedIn', () => {
    it('should call loadEntertainmentManagementOptions when there is no productId in the query params', () => {
      jest.spyOn(facade, 'loadEntertainmentManagementOptions');

      component.initAfterLoggedIn();

      component.selectEntertainmentManagementLoaded$.subscribe((isLoaded) => {
        isLoaded = true;
        component.isEntertainmentManagementLoaded = !!isLoaded;
        expect(facade.loadEntertainmentManagementOptions).toHaveBeenCalled();
      });

      expect(facade.loadEntertainmentManagementOptions).toHaveBeenCalled();
    });
  });
});

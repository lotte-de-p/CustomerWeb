import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SalesOneConfiguratorFeatSimsComponent } from './sales-one-configurator-feat-sims.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SimsFacade, UsageTypeEnum } from '@sales/one-configurator/data-access';
import { AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { of } from 'rxjs';
import { LanguageService } from '@telenet/ng-lib-page';

@NgModule()
class MockOneConfiguratorNgrxModule {}

describe('SalesOneConfiguratorFeatSimsComponent', () => {
  let component: SalesOneConfiguratorFeatSimsComponent;
  let fixture: ComponentFixture<SalesOneConfiguratorFeatSimsComponent>;
  let simsFacadeMock: jest.Mocked<SimsFacade>;
  let languageServiceMock: Partial<LanguageService>;

  beforeEach(async () => {
    simsFacadeMock = jest.genMockFromModule<SimsFacade>(
      '@sales/one-configurator/data-access'
    ) as jest.Mocked<SimsFacade>;
    simsFacadeMock.enabled$ = of(true);
    simsFacadeMock.simsState$ = of({
      simConfigurations: [{ usageType: UsageTypeEnum.LIMITED1 }],
      priceAfterChangingOneSimToLimited: null,
      priceAfterChangingOneSimToUnlimited: null,
    });
    languageServiceMock = {
      getLocaleString: jest.fn().mockReturnValue('nl'),
    };

    await TestBed.configureTestingModule({
      imports: [
        SalesOneConfiguratorFeatSimsComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        { provide: SimsFacade, useValue: simsFacadeMock },
        { provide: LanguageService, useValue: languageServiceMock },
      ],
    })
      .overrideComponent(SalesOneConfiguratorFeatSimsComponent, {
        set: {
          imports: [MockOneConfiguratorNgrxModule, AsyncPipe, TranslateModule],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(SalesOneConfiguratorFeatSimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize simsState$ observable', () => {
    expect(component.simsState$).toBeDefined();
  });

  describe('addSim', () => {
    it('should add a new sim to simConfig', fakeAsync(() => {
      jest.spyOn(simsFacadeMock, 'addSim');

      component.addSim();

      component.simsState$.subscribe(() => {
        expect(simsFacadeMock.addSim).toHaveBeenCalled();
      });
      tick();
    }));
  });

  describe('removeSim', () => {
    it('should remove a sim from simConfig', fakeAsync(() => {
      jest.spyOn(simsFacadeMock, 'removeSim');

      component.removeSim();

      component.simsState$.subscribe(() => {
        expect(simsFacadeMock.removeSim).toHaveBeenCalled();
      });
      tick();
    }));
  });

  describe('updateUsageType', () => {
    it('should add a update usage type of sim to simConfig', fakeAsync(() => {
      jest.spyOn(simsFacadeMock, 'updateUsageType');

      component.updateUsageType(0, UsageTypeEnum.UNLIMITED);

      component.simsState$.subscribe(() => {
        expect(simsFacadeMock.updateUsageType).toHaveBeenCalledWith({
          index: 0,
          usageType: UsageTypeEnum.UNLIMITED,
        });
      });
      tick();
    }));
  });
});

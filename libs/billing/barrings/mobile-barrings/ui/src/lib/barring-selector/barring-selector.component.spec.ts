import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarringSelectorComponent } from './barring-selector.component';
import { MobileBarringGroup, MobileBarringSettings } from '@billing/barrings/mobile-barrings/data-access';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('BarringSelectorComponent', () => {
  let component: BarringSelectorComponent;
  let fixture: ComponentFixture<BarringSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });
    fixture = TestBed.createComponent(BarringSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set correct variables', () => {
    component.barringSettings = {
      code: 'general',
      barringSettings: [
        {
          code: 'setting',
          id: '9999',
          isBarred: false,
          isSetByFraudManager: false,
          mutualExclusiveBarringIds: [],
        },
      ],
      disabledByFraud: true,
    } as MobileBarringGroup;

    expect(component.groupCode).toEqual('general');
    expect(component.disabledByFraud).toEqual(true);
    expect(component.barSettings).toEqual([
      {
        code: 'setting',
        id: '9999',
        isBarred: false,
        isSetByFraudManager: false,
        mutualExclusiveBarringIds: [],
      },
    ]);
  });

  it('should open the general menu when banner link is clicked', () => {
    jest.spyOn(component, 'slideMenu');
    component.globalBarringEnabled = true;
    component.groupCode = 'general';

    component.bannerLinkIsClicked = true;

    expect(component.slideMenu).toHaveBeenCalledWith(true);
  });

  it('should not open the general menu when banner link is clicked', () => {
    jest.spyOn(component, 'slideMenu');
    component.globalBarringEnabled = true;
    component.groupCode = 'roaming';

    component.bannerLinkIsClicked = true;

    expect(component.slideMenu).not.toHaveBeenCalled();
  });

  it('should close menu when slideMenu is called with open as false', () => {
    jest.spyOn(document.body.classList, 'add');
    jest.spyOn(document.body.classList, 'remove');

    component.slideMenu(false);

    expect(document.body.classList.remove).toHaveBeenCalledWith('overflow--hidden');
  });

  it('should add class overflow--hidden to body when slideMenu is called with open as true', () => {
    jest.spyOn(document.body.classList, 'add');

    component.slideMenu(true);

    expect(document.body.classList.add).toHaveBeenCalledWith('overflow--hidden');
  });

  it('should emit saveBarrings and call slideMenu with false when save is called', () => {
    jest.spyOn(component.saveBarrings, 'emit');
    jest.spyOn(component, 'slideMenu');
    component.globalBarringEnabled = false;
    component.originalValueOfGeneralBarring = false;

    component.save();

    expect(component.saveBarrings.emit).toHaveBeenCalled();
    expect(component.slideMenu).toHaveBeenCalledWith(false);
  });

  it('should emit open the second popup when globalbarrings is enabled', () => {
    jest.spyOn(component, 'slideMenu');
    component.globalBarringEnabled = true;
    component.originalValueOfGeneralBarring = false;

    component.save();

    expect(component.showWarningScreen).toEqual(true);
    expect(component.slideMenu).not.toHaveBeenCalled();
  });

  it('should emit savebarrings when the save button is clicked in the second popup', () => {
    jest.spyOn(component.saveBarrings, 'emit');
    jest.spyOn(component, 'slideMenu');

    component.saveWarning(new Event('click'));

    expect(component.showWarningScreen).toEqual(false);
    expect(component.saveBarrings.emit).toHaveBeenCalled();
    expect(component.slideMenu).toHaveBeenCalledWith(false);
  });

  it('should close the second popup', () => {
    component.cancelWarning(new Event('click'));

    expect(component.showWarningScreen).toEqual(false);
  });

  it('should emit toggleBarring when activateBarring is called', () => {
    const mockSetting = { id: '1' } as MobileBarringSettings;
    jest.spyOn(component.toggleBarring, 'emit');

    component.activateBarring(mockSetting);

    expect(component.toggleBarring.emit).toHaveBeenCalledWith(mockSetting);
  });

  it('should close menu and emit cancel event', () => {
    jest.spyOn(component, 'slideMenu');
    jest.spyOn(component.cancel, 'emit');

    component.cancelAction();

    expect(component.cancel.emit).toHaveBeenCalled();
    expect(component.slideMenu).toHaveBeenCalledWith(false);
  });
});

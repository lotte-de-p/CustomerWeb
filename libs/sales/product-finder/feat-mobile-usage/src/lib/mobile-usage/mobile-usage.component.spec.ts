import { ComponentFixture, TestBed } from '@angular/core/testing';
import { when } from 'jest-when';

import { MobileUsageComponent } from './mobile-usage.component';
import { MobileUsage, MobileUsageFacade, selectMobileUsage } from '@sales/product-finder/data-access';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { BehaviorSubject, Subject } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('MobileUsageComponent', () => {
  let component: MobileUsageComponent;
  let fixture: ComponentFixture<MobileUsageComponent>;
  let mobileUsageFacade: MobileUsageFacade;
  const mobileUsage$: Subject<MobileUsage> = new BehaviorSubject<MobileUsage>({
    mobileLines: [{ selection: ['GAMING'], collapsed: false, error: null }],
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileUsageComponent, TgTranslateTestingModule.forRoot()],
      providers: [provideMockStore()],
    }).compileComponents();

    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    const store$ = TestBed.inject(MockStore);
    when(jest.spyOn(store$, 'select')).calledWith(selectMobileUsage).mockReturnValue(mobileUsage$);

    mobileUsageFacade = TestBed.inject(MobileUsageFacade);
    fixture = TestBed.createComponent(MobileUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updateMobileLineSelection should call mobileUsageFacade updateMobileLineSelection', () => {
    const index = 0;
    const selection: string[] = ['gaming'];
    const updateMobileLineSelectionSpy = jest.spyOn(mobileUsageFacade, 'updateMobileLineSelection');

    component.updateMobileLineSelection(index, selection);

    expect(updateMobileLineSelectionSpy).toHaveBeenCalledWith(index, selection);
  });

  it('updateMobileLineCollapsed should call mobileUsageFacade updateMobileLineCollapsed', () => {
    const index = 0;
    const collapsed = true;
    const updateMobileLineCollapsedSpy = jest.spyOn(mobileUsageFacade, 'updateMobileLineCollapsed');

    component.updateMobileLineCollapsed(index, collapsed);

    expect(updateMobileLineCollapsedSpy).toHaveBeenCalledWith(index, collapsed);
  });
});

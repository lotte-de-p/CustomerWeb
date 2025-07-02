import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceCaseMobileListComponent } from './service-case-mobile-list.component';
import { ServiceCase } from '@care-service-cases/service-case/data-access';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

describe('ServiceCaseMobileListComponent', () => {
  let component: ServiceCaseMobileListComponent;
  let fixture: ComponentFixture<ServiceCaseMobileListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TgTranslateTestingModule.forRoot({
          translations: {},
        }),
      ],
      providers: [{ provide: Window, useValue: {} }],
    });
    fixture = TestBed.createComponent(ServiceCaseMobileListComponent);
    component = fixture.componentInstance;
  });

  it('should initialize', () => {
    expect(component).toBeTruthy();
  });

  it('should set the showSelector to false on outside click', () => {
    const contains = jest.fn();
    contains.mockReturnValue(false);
    component.element = {
      nativeElement: {
        contains,
      },
    };
    component.showSelector = true;
    component.onGlobalClick({} as Event);
    expect(component.showSelector).toBe(false);
  });

  it('should not set the showSelector to false on outside click', () => {
    const contains = jest.fn();
    contains.mockReturnValue(true);
    component.element = {
      nativeElement: {
        contains,
      },
    };
    component.showSelector = true;
    component.onGlobalClick({} as Event);
    expect(component.showSelector).toBe(true);
  });

  it('should set the showSelector to false on unexisting element', () => {
    const contains = jest.fn();
    contains.mockReturnValue(true);
    component.element = undefined;
    component.showSelector = true;
    component.onGlobalClick({} as Event);
    expect(component.showSelector).toBe(false);
  });

  it('should toggle the selector', () => {
    component.showSelector = true;
    component.serviceCases = [{ id: '12345' } as ServiceCase];
    component.toggleSelector();
    expect(component.showSelector).toBe(false);
  });

  it('should emit the selected service case', () => {
    const selectedServiceCase = {
      id: '1',
      creationDate: new Date(2023, 5, 24),
    } as ServiceCase;
    component.showSelector = true;
    component.selectServiceCase.subscribe((serviceCase) => {
      expect(serviceCase).toEqual(selectedServiceCase);
      expect(component.showSelector).toBe(false);
    });
    component.selectServiceCaseItem(selectedServiceCase);
    fixture.detectChanges();
  });
});

import { Type } from '@care-service-cases/service-case/data-access';
import { TestBed } from '@angular/core/testing';
import { ServiceCaseIconComponent } from './service-case-icon.component';

describe('ServiceCaseIconComponent', () => {
  let component: ServiceCaseIconComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ServiceCaseIconComponent],
    });
    component = TestBed.createComponent(ServiceCaseIconComponent).componentInstance;
  });

  it('should map the service case type to the correct icon class', () => {
    expect(component.getIcon(Type.OTHER)).toBe('icon-others');
    expect(component.getIcon(Type.MOVE)).toBe('icon-deliveryvan');
    expect(component.getIcon(Type.TAKEOVER)).toBe('icon-mobile-arrow-mobile');
    expect(component.getIcon(Type.REPAIR)).toBe('icon-tool');
    expect(component.getIcon(Type.INSTALL)).toBe('icon-tool');
    expect(component.getIcon(Type.HOME_DELIVERY)).toBe('icon-house');
  });
});

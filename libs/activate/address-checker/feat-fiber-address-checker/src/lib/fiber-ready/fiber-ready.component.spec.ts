import { TestBed } from '@angular/core/testing';
import { FiberReadyComponent } from './fiber-ready.component';
import { expect } from '@jest/globals';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FiberStatusEnum } from '@address-checker/data-access';

describe('FiberReadyComponent', () => {
  let component: FiberReadyComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      declarations: [],
      schemas: [],
      providers: [],
    }).compileComponents();
    const fixture = TestBed.createComponent(FiberReadyComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(FiberReadyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('FiberReadyComponent Inputs and Outputs', () => {
    it('should correctly initialize input properties', () => {
      component.messageGroupName = 'testGroup';
      component.status = FiberStatusEnum.READY;
      component.isLoggedIn = true;
      component.urlRequestSubscription = 'testUrl';
      component.firstName = 'John';

      expect(component.messageGroupName).toEqual('testGroup');
      expect(component.status).toEqual(FiberStatusEnum.READY);
      expect(component.isLoggedIn).toBe(true);
      expect(component.urlRequestSubscription).toEqual('testUrl');
      expect(component.firstName).toEqual('John');
    });

    it('should emit backToAddressSelector event when toAddressSelector is called', () => {
      jest.spyOn(component.backToAddressSelector, 'emit');
      component.toAddressSelector();
      expect(component.backToAddressSelector.emit).toHaveBeenCalled();
    });

    it('should emit toProductPage event when redirectToProductPage is called', () => {
      jest.spyOn(component.toProductPage, 'emit');
      component.redirectToProductPage();
      expect(component.toProductPage.emit).toHaveBeenCalled();
    });
  });
});

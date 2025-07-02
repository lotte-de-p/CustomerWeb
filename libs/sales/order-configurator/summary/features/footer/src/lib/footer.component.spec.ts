import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState } from '@sales/order-configurator/summary/state';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [provideMockStore({ initialState: defaultState })],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event when terms and conditions are clicked', () => {
    jest.spyOn(component.termsAndConditionsLinkClickedEvent, 'next');
    const link: HTMLInputElement = fixture.nativeElement.querySelector('#summary-summary-terms-and-conditions');
    link.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.termsAndConditionsLinkClickedEvent.next).toHaveBeenCalled();
  });
});

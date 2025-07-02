import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
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
    const link: HTMLInputElement = fixture.nativeElement.querySelector('#order-summary-terms-and-conditions');
    link.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.termsAndConditionsLinkClickedEvent.next).toHaveBeenCalled();
  });
});

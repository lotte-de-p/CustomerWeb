import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DisclaimerComponent } from './disclaimer.component';

describe('DisclaimerComponent', () => {
  let component: DisclaimerComponent;
  let fixture: ComponentFixture<DisclaimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HttpClientTestingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(DisclaimerComponent);
    component = fixture.componentInstance;
  });

  describe('toggleDisclaimerContent', () => {
    it('should set showMore to true if it was false', () => {
      component.showMore = false;
      component.toggleDisclaimerContent();
      expect(component.showMore).toBe(true);
    });
    it('should set showMore to false if it was true', () => {
      component.showMore = true;
      component.toggleDisclaimerContent();
      expect(component.showMore).toBe(false);
    });
  });

  describe('getText', () => {
    it('should set showMore to false if it was true', () => {
      component.messageGroupName = 'address-fiber-checker';
      const result = component.getText('disclaimer');

      expect(result).toBe('ng.address-fiber-checker.disclaimer.text');
    });
  });
});

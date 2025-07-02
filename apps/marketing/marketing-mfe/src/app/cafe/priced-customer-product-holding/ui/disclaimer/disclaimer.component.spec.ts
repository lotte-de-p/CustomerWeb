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

  describe('toggleShowMore', () => {
    it('should set showMore to true if it was false', () => {
      component.showMore = false;
      component.toggleShowMore();
      expect(component.showMore).toBe(true);
    });
    it('should set showMore to false if it was true', () => {
      component.showMore = true;
      component.toggleShowMore();
      expect(component.showMore).toBe(false);
    });
  });
});

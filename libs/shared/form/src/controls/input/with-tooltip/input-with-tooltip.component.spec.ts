import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { InputWithTooltipComponent } from './input-with-tooltip.component';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';

describe('InputWithTooltipComponent', () => {
  let component: InputWithTooltipComponent;
  let fixture: ComponentFixture<InputWithTooltipComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputWithTooltipComponent],
      providers: [
        LanguageService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
        provideEnvironmentNgxMask(),
      ],
      imports: [
        FormsModule,
        NgxMaskDirective,
        NgxMaskPipe,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });

    fixture = TestBed.createComponent(InputWithTooltipComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    component.key = 'test-input';
    fixture.detectChanges();
  }));

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should set the selected option when writevalue is called', fakeAsync(() => {
    component.writeValue('test');
    expect(component.value).toEqual('test');
  }));

  afterEach(() => {
    cleanStylesFromDom();
  });
});

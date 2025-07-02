import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormErrorService } from '../../errors';
import { DuidComponent } from './duid.component';

const spyOn = jest.spyOn;

describe('DuidComponent', () => {
  let component: DuidComponent;
  let fixture: ComponentFixture<DuidComponent>;
  let formBuilder: FormBuilder;
  let fbGroup: FormGroup;
  const duid = '68:02:B8:E4:A3:88:AB:CD:DE:EE:11';

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DuidComponent],
      providers: [FormBuilder, ReactiveFormsModule, FormErrorService, { provide: 'Window', useValue: {} }],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuidComponent);
    formBuilder = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;
    fbGroup = formBuilder.group({});
    component.duidFormGroup = fbGroup;
    component.duid = duid;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should init duid address', () => {
      component.duidFormGroup = fbGroup;
      spyOn(component.duidFormGroup, 'addControl');
      component.ngOnInit();
      expect(component.duidFormGroup.addControl).toHaveBeenCalled();
      expect(component.duidFormGroup.controls['duidField'].value).toBe(duid);
    });
  });

  describe('keyUpEvent', () => {
    it('should add : if duid length is even', () => {
      const event = {
        code: '32',
        key: '2',
        preventDefault: jest.fn(),
        target: {
          name: 'first',
          value: '2',
          nextElementSibling: {
            type: 'number',
            focus: jest.fn(),
          },
        },
      };
      component.duidFormGroup.controls['duidField'].setValue('12');
      component.keyUpEvent(event);
      expect(event.target.value).toEqual('2');
      expect(component.duidFormGroup.controls['duidField'].value).toBe('12');
    });
    it('should not add : if duid length is odd', () => {
      const event = {
        code: '32',
        key: '2',
        preventDefault: jest.fn(),
        target: {
          name: 'first',
          value: '2',
          nextElementSibling: {
            type: 'number',
            focus: jest.fn(),
          },
        },
      };
      component.duidFormGroup.controls['duidField'].setValue('12:2');
      component.keyUpEvent(event);
      expect(event.target.value).toEqual('2');
      expect(component.duidFormGroup.controls['duidField'].value).toBe('12:2');
    });
  });

  describe('keyPressEvent', () => {
    it('should return null', () => {
      const event = {
        code: '32',
        key: '$',
        preventDefault: jest.fn(),
        target: {
          name: 'first',
          value: '2',
          nextElementSibling: {
            type: 'number',
            focus: jest.fn(),
          },
        },
      };
      const actual = component.keyPressEvent(event);
      expect(actual).toBeFalsy();
    });
    it('should return values if value is AlphaNumeric', () => {
      const event = {
        code: '32',
        key: 'A',
        preventDefault: jest.fn(),
        target: {
          name: 'first',
          value: '2',
          nextElementSibling: {
            type: 'number',
            focus: jest.fn(),
          },
        },
      };
      const actual = component.keyPressEvent(event);
      expect(actual).toEqual('A');
    });
  });
});

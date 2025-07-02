import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReturnDevicesHeaderComponent } from './return-devices-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { expect, jest } from '@jest/globals';

describe('ReturnDevicesHeaderComponent', () => {
  let component: ReturnDevicesHeaderComponent;
  let fixture: ComponentFixture<ReturnDevicesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: 'Window',
          useValue: {},
        },
      ],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnDevicesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ReturnDevicesHeaderComponent', () => {
    it('should create component', () => {
      expect(component).toBeDefined();
    });

    it('should emit printReturnLabelClick when onGenerateReturnLabelClick is called', () => {
      jest.spyOn(component.printReturnLabelClick, 'emit');

      component.onGenerateReturnLabelClick();

      expect(component.printReturnLabelClick.emit).toHaveBeenCalled();
    });
  });

  describe('onGenerateReturnLabelClick', () => {
    it('should emit the return devices label click event', () => {
      jest.spyOn(component.printReturnLabelClick, 'emit');
      component.onGenerateReturnLabelClick();

      expect(component.printReturnLabelClick.emit).toHaveBeenCalled();
    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReturnDevicesFooterComponent } from './return-devices-footer.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ReturnDevicesFooterComponent', () => {
  let component: ReturnDevicesFooterComponent;
  let fixture: ComponentFixture<ReturnDevicesFooterComponent>;

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
    fixture = TestBed.createComponent(ReturnDevicesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ReturnDevicesFooterComponent', () => {
    it('should create component', () => {
      expect(component).toBeDefined();
    });
  });
});

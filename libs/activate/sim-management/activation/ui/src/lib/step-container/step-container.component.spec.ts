import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimManagementStepContainerComponent } from './step-container.component';
import { TranslateModule } from '@ngx-translate/core';

describe('SimManagementStepContainerComponent', () => {
  let component: SimManagementStepContainerComponent;
  let fixture: ComponentFixture<SimManagementStepContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [{ provide: 'Window', useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(SimManagementStepContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

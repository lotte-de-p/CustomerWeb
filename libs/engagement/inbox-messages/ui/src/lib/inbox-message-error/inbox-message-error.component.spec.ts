import { TestBed, ComponentFixture } from '@angular/core/testing';
import { InboxMessageErrorComponent } from './inbox-message-error.component';
import { TranslateModule } from '@ngx-translate/core';

describe('InboxMessageErrorComponent', () => {
  let component: InboxMessageErrorComponent;
  let fixture: ComponentFixture<InboxMessageErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InboxMessageErrorComponent, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxMessageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit errorAction event when handleErrorAction is called', () => {
    const emitSpy = jest.spyOn(component.errorAction, 'emit');
    component.handleErrorAction();
    expect(emitSpy).toHaveBeenCalled();
  });
});

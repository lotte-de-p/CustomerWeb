import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { LoaderModule, windowFactory } from '@telenet/ng-lib-page';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { StepFlowState } from '../store/step-flow.state';
import { Step } from '../step.model';
import { of } from 'rxjs';
import { StepBuilder } from '../step.builder';
import { StepFlowAnalyticsConfig } from '../interfaces/step-flow-analytics-config.interface';
import { StepContainerComponent } from './step-container.component';
import { StepContainerDirective } from './step-container.directive';
import { TemplateFactory } from '../factories/template.factory';
import { SetStepConfigurationAction } from '../store/step-flow.actions';

const spyOn = jest.spyOn;

@Component({
  template: ` <app-step-container [stepFlowAnalyticsConfig]="stepFlowAnalyticsConfig"></app-step-container> `,
})
export class TestComponent {
  stepFlowAnalyticsConfig: StepFlowAnalyticsConfig = {
    analyticsIntent: 'intent',
    analyticsFlowType: 'flowType',
  };
}

function fakeSelectSnapshot(number: number, step: Step) {
  return (_: unknown) => {
    if (number === 0) {
      number++;
      return true;
    }
    if (number === 1) {
      number++;
      return [step];
    } else if (number === 2) {
      number++;
      return step;
    } else if (number === 3) {
      number++;
      return number;
    }
    return undefined;
  };
}

describe('StepContainerComponent ', () => {
  let fixture: ComponentFixture<TestComponent>;
  let childComponent: StepContainerComponent;
  let store: Store;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [CommonModule, TranslateModule, LoaderModule, NgxsModule.forRoot([StepFlowState])],
      declarations: [StepContainerComponent, TestComponent, StepContainerDirective],
      providers: [TemplateFactory, { provide: 'Window', useValue: windowFactory() }],
    }).createComponent(TestComponent);
    childComponent = fixture.debugElement.query(By.directive(StepContainerComponent)).componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
  });

  it('should create with a step with analytic options', function () {
    const step = StepBuilder.builder('step1')
      .withAnalyticsOptions({
        name: 'name',
      })
      .build();
    store.dispatch(
      new SetStepConfigurationAction({
        key: 'step1',
        steps: [
          {
            key: 'step1',
            component: StepContainerComponent,
          },
        ],
      })
    );

    step.template = TestComponent;
    spyOn(store, 'select').mockReturnValue(of(step));
    spyOn(store, 'selectSnapshot').mockReturnValue(fakeSelectSnapshot(0, step));
    expect(childComponent).toBeTruthy();
    childComponent.ngOnInit();
    expect(store.select).toHaveBeenCalled();
    expect(store.selectSnapshot).toHaveBeenCalledTimes(2);
  });

  it('should create with a step without analytic options', function () {
    const step = StepBuilder.builder('step1').build();
    store.dispatch(
      new SetStepConfigurationAction({
        key: 'step1',
        steps: [
          {
            key: 'step1',
            component: StepContainerComponent,
          },
        ],
      })
    );

    step.template = TestComponent;

    spyOn(store, 'select').mockReturnValue(of(step));
    spyOn(store, 'selectSnapshot').mockReturnValue(fakeSelectSnapshot(0, step));
    expect(childComponent).toBeTruthy();
    childComponent.ngOnInit();
    expect(store.select).toHaveBeenCalled();

    expect(store.selectSnapshot).toHaveBeenCalledTimes(2);
  });
});

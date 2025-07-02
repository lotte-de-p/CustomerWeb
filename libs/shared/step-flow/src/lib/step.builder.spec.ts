import { Observable, of } from 'rxjs';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { StepBuilder } from './step.builder';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { StepEnum } from './step.enum';

const imagePath = '/image/path';
const contentId = 'content-id';
const firstStep = 'first-step';

export class TestComponent {}

describe('StepBuilder', () => {
  describe('aStep', () => {
    it('should return a step containing a certain key and the default component template.', () => {
      const step = StepBuilder.builder(firstStep).withLayoutOptions({ contentId: contentId }).build();
      expect(step.key).toBe(firstStep);
      expect(step.layoutOptions?.contentId).toEqual(contentId);
    });
  });

  describe('aStepWithImage', () => {
    it('should return an image step containing a certain key and the default component template.', () => {
      const step = StepBuilder.builder(firstStep)
        .withImage(imagePath)
        .withLayoutOptions({ contentId: contentId })
        .build();
      expect(step.key).toBe(firstStep);
      expect(step.image).toEqual(imagePath);
      expect(step.layoutOptions?.contentId).toEqual(contentId);
    });
  });

  describe('aStepWithImageAndHeader', () => {
    it('should return an image step with headercontaining a certain key and the default component template.', () => {
      const step = StepBuilder.builder(firstStep)
        .withImage(imagePath)
        .withLayoutOptions({ contentId: contentId })
        .build();
      expect(step.image).toEqual(imagePath);
      expect(step.key).toBe(firstStep);
      expect(step.layoutOptions?.contentId).toEqual(contentId);
    });
  });

  describe('aStepWithImageAndHeaderAndOneDescription', () => {
    it('should return an image step with headercontaining a certain key and the default component template with description header.', () => {
      const step = StepBuilder.builder(firstStep)
        .withImage(imagePath)
        .withLayoutOptions({ contentId: contentId })
        .build();
      expect(step.key).toBe(firstStep);
      expect(step.layoutOptions?.contentId).toEqual(contentId);
      expect(step.image).toEqual(imagePath);
    });
  });

  describe('anEmptyStep', () => {
    it('should return an empty step with a certain key and the default component template.', () => {
      const step = StepBuilder.builder(firstStep).build();
      expect(step.key).toBe(firstStep);
    });
  });

  describe('withComponent', () => {
    it('should return a step with a certain component', () => {
      const step = StepBuilder.builder(firstStep).withComponent('mycomponent').build();
      expect(step.component.selector).toBe('mycomponent');
    });
  });

  describe('withEnabledState', () => {
    it('should return a step with enabled state true per default', () => {
      const step = StepBuilder.builder(firstStep).build();
      expect(step.isEnabled).toBe(true);
    });

    it('should return a step with enabled state true when set excplicitly set to true', () => {
      const step = StepBuilder.builder(firstStep).withEnabledState(true).build();
      expect(step.isEnabled).toBe(true);
    });

    it('should return a step with enabled state false when set excplicitly set to false', () => {
      const step = StepBuilder.builder(firstStep).withEnabledState(false).build();
      expect(step.isEnabled).toBe(false);
    });
  });

  describe('withFinalState', () => {
    it('should return a step with a non final state per default', () => {
      const step = StepBuilder.builder(firstStep).build();
      expect(step.isFinal()).toBe(false);
    });

    it('should return a step with a state type of finale', () => {
      const step = StepBuilder.builder(firstStep).withFinalState().build();
      expect(step.isFinal()).toBe(true);
    });
  });

  describe('withOverwriteFlowLabel', () => {
    it('should return a step with a flow label', () => {
      const step = StepBuilder.builder(firstStep).withOverwriteFlowLabel('someLabel').build();
      expect(step.overwriteFlowLabel).toBe('someLabel');
    });
    it('should return a step with flow label undefined as default', () => {
      const step = StepBuilder.builder(firstStep).build();
      expect(step.overwriteFlowLabel).toBeUndefined();
    });
  });

  describe('withMobileImage', () => {
    it('should return a step with a mobile image', () => {
      const step = StepBuilder.builder(firstStep).withMobileImage('someImage').build();
      expect(step.imageMobile).toBe('someImage');
    });
    it('should return a step with mobile image undefined as default', () => {
      const step = StepBuilder.builder(firstStep).build();
      expect(step.imageMobile).toBeUndefined();
    });
  });

  describe('withChosenProductValue', () => {
    it('should return a step with a the chosen product', () => {
      const chosenProductObservable$: Observable<OmapiProduct> = new Observable<OmapiProduct>();

      const step = StepBuilder.builder(firstStep).withChosenProductValue(chosenProductObservable$).build();
      expect(step.chosenProduct$).toBe(chosenProductObservable$);
    });
  });

  describe('withScrollableImage', () => {
    it('should return a step with a scrollable image as true', () => {
      const step = StepBuilder.builder(firstStep).withScrollableImage(true).build();
      expect(step.isImageScrollable).toBe(true);
    });

    it('should return a step with a scrollable image as undefined by default', () => {
      const step = StepBuilder.builder(firstStep).build();
      expect(step.isImageScrollable).toBeUndefined();
    });
  });
  describe('withAsAlternativeFirstStep', () => {
    it('should set the step as an alternative first step and return the builder', () => {
      const step = StepBuilder.builder(firstStep).withAsAlternativeFirstStep().build();

      expect(step.asAlternativeFirstStep).toBe(true);
    });
  });

  describe('fullStepBuilder', () => {
    it('should build with values', function () {
      const analyticsOptions = {
        name: 'name',
      };
      const layoutOptions = {
        contentId: 'contentId',
        wrapperClasses: ['wrapperClass'],
      };
      const titleParameterValue$ = of('titleParameterValue');
      const chosenProductValue$ = of({ productId: 123 } as unknown);
      const step = StepBuilder.builder('key')
        .withAnalyticsOptions(analyticsOptions)
        .withLayoutOptions(layoutOptions)
        .withImage('image')
        .withComponent(TestComponent)
        .withOrder(0)
        .withEnabledState(true)
        .withCompletedState(false)
        .withPreviousStepDisabled(true)
        .withFinalState()
        .withOverwriteFlowLabel('label')
        .withTitleParameterValue(titleParameterValue$)
        .withChosenProductValue(chosenProductValue$)
        .withMobileImage('mobileImage')
        .withScrollableImage(false)
        .withAsAlternativeFirstStep()
        .withTemplate(TestComponent)
        .build();
      expect(step.key).toEqual('key');
      expect(step.analyticsOptions).toEqual(analyticsOptions);
      expect(step.layoutOptions).toEqual(layoutOptions);
      expect(step.image).toEqual('image');
      expect(step.component).toEqual({ selector: TestComponent });
      expect(step.template).toEqual(TestComponent);
      expect(step.order).toEqual(0);
      expect(step.isEnabled).toBe(true);
      expect(step.previousStepDisabled).toBe(true);
      expect(step.isImageScrollable).toBe(false);
      expect(step.isCompleted).toBe(false);
      expect(step.type).toEqual(StepEnum.FINAL);
      expect(step.overwriteFlowLabel).toEqual('label');
      expect(step.titleParameterValue).toEqual(titleParameterValue$);
      expect(step.chosenProduct$).toEqual(chosenProductValue$);
      expect(step.imageMobile).toEqual('mobileImage');
      expect(step.asAlternativeFirstStep).toBe(true);
    });

    it('should build with undefined values', function () {
      const analyticsOptions = undefined;
      const layoutOptions = undefined;
      const image = undefined;
      const step = StepBuilder.builder('key')
        .withAnalyticsOptions(analyticsOptions)
        .withLayoutOptions(layoutOptions)
        .withImage(image)
        .withConfirmState()
        .build();
      expect(step.analyticsOptions).toBeUndefined();
      expect(step.layoutOptions).toBeUndefined();
      expect(step.image).toBeUndefined();
      expect(step.type).toEqual(StepEnum.CONFIRM);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

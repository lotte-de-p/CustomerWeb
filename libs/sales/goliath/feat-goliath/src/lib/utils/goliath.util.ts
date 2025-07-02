import { Flow, Step } from '@sales/goliath/data-access';

export class GoliathUtil {
  static removeComponentsFromFlows<T>(flows: Flow<T>[]): Flow<T>[] {
    return flows.map((flow) => ({
      ...flow,
      steps: flow.steps.map(({ component: _component, ...rest }) => rest),
    }));
  }

  static removeComponentsFromSteps(steps: Step[]): Step[] {
    return steps.map(({ component: _component, ...restStep }) => restStep);
  }
}

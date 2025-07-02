import { StepState } from './step.state';
import { selectStepByMessageGroup } from './step.factory.selectors';
import { stepFactory } from './step.state.testfactory';

describe('step factory selectors', () => {
  const initialState: StepState = stepFactory.build();

  it('should not select anything when message group is not present in steps', () => {
    const result = selectStepByMessageGroup('3').projector(initialState);

    expect(result).toHaveLength(0);
  });

  it('should select the step matching the messagegroup', () => {
    const result = selectStepByMessageGroup('2').projector(initialState);

    expect(result).toHaveLength(1);
    expect(result).toEqual(['2']);
  });
});

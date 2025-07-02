import { OnChange, SimpleChange, SimpleChangeCallBackFunction } from './on-change.util';

const onPropChangeSpy = jest.fn();
class TestClass {
  @OnChange('callback1')
  prop?: string;

  spyToCall?: SimpleChangeCallBackFunction<string>;

  callback1(value: string, change: SimpleChange<string>) {
    this.spyToCall?.(value, change);
  }
}
// FIXME - this test is failing, to investigate
xdescribe('OnChange Decorator', () => {
  const component = new TestClass();
  component.spyToCall = onPropChangeSpy;
  it('should call the provided callback function with the correct change details', () => {
    // Testing first change
    component.prop = 'firstValue';
    expect(onPropChangeSpy).toHaveBeenCalledWith('firstValue', {
      firstChange: true,
      previousValue: undefined,
      currentValue: 'firstValue',
      isFirstChange: expect.any(Function),
    });

    // Testing subsequent change
    component.prop = 'secondValue';
    expect(onPropChangeSpy).toHaveBeenCalledWith('secondValue', {
      firstChange: false,
      previousValue: 'firstValue',
      currentValue: 'secondValue',
      isFirstChange: expect.any(Function),
    });
  });
});

import { BlendedHardwarePagesComponent } from './blended-hardware-pages.component';
import { MockBuilder, MockRender } from 'ng-mocks';

describe('BlendedHardwarePagesComponent', () => {
  beforeEach(() => MockBuilder(BlendedHardwarePagesComponent));

  it('should create', () => {
    const fixture = MockRender(BlendedHardwarePagesComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });
});

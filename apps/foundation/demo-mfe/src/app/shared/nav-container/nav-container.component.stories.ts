import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { NavContainerComponent } from './nav-container.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, importProvidersFrom } from '@angular/core';

@Component({
  selector: 'tg-foundation-demo-mfe-test-component',
  template: ` <div>Some component</div>`,
  standalone: true,
})
class TestComponent {}

export default {
  title: 'NavContainerComponent',
  component: NavContainerComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(
          RouterTestingModule.withRoutes([
            {
              path: '',
              pathMatch: 'full',
              redirectTo: 'home',
            },
            {
              path: 'billing',
              component: TestComponent,
            },
            {
              path: 'product',
              component: TestComponent,
            },
          ])
        ),
        TestComponent,
      ],
    }),
  ],
} as Meta<NavContainerComponent>;

type Story = StoryObj<NavContainerComponent>;
export const Primary: Story = {};

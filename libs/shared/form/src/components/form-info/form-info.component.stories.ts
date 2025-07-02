import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { FormInfoComponent } from './form-info.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
export default {
  title: 'Form/FormInfoComponent',
  component: FormInfoComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, TranslateModule],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(
          TgTranslateTestingModule.forRoot({
            language: 'en',
            translations: {
              'form.form-info.first-name.label': 'Enter the first name',
              'form.form-info.first-name.placeholder': 'John',
              'form.form-info.last-name.label': 'Enter the last name',
              'form.form-info.last-name.placeholder': 'Doe',
              'form.form-info.email.label': 'Email',
              'form.form-info.email.placeholder': 'john.doe@telenet.be',
            },
          })
        ),
      ],
    }),
  ],
} as Meta<FormInfoComponent>;

export const WithNoForm = (args: FormInfoComponent) => ({
  props: args,
});

export const WithAEmptyForm = (args: FormInfoComponent) => ({
  props: { ...args, formGroup: new FormGroup({}) },
  component: FormInfoComponent,
});

export const WithAForm = () => ({
  template: `
<div class="display--flex flex-direction--row justify-content--center">
<h3>This component is to be used for testing purposes only</h3>
</div>
<div class="display--flex flex-direction--row justify-content--around mt--xl">
    <tg-form-info [formGroup]="formGroup"></tg-form-info>
    <form [formGroup]="formGroup">
      <div class="form-group mb--l">
        <label for="firstName">{{ 'form.form-info.first-name.label' | translate }}</label>
        <div class="form__input-container">
          <input
            type="text"
            formControlName="firstName"
            id="firstName"
            class="form__input form__input--max-width"
            required="required"
            value=""
            placeholder="{{ 'form.form-info.first-name.placeholder' | translate }}" />
        </div>
      </div>
      <div class="form-group mb--l">
        <label for="lastName">{{ 'form.form-info.last-name.label' | translate }}</label>
        <div class="form__input-container">
          <input
            type="text"
            formControlName="lastName"
            id="lastName"
            class="form__input form__input--max-width"
            required="required"
            value=""
            placeholder="{{ 'form.form-info.last-name.placeholder' | translate }}" />
        </div>
      </div>
      <div class="form-group mb--l">
        <label for="email">{{ 'form.form-info.email.label' | translate }}</label>
        <div class="form__input-container">
          <input
            type="text"
            formControlName="email"
            id="email"
            class="form__input form__input--max-width"
            required="required"
            value=""
            placeholder="{{ 'form.form-info.email.placeholder' | translate }}" />
        </div>
      </div>
    </form>
    </div>
  `,
  props: {
    formGroup: new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.min(3)]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
    }),
  },
});

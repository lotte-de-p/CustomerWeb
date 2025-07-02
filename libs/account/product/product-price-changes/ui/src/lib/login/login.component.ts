import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Login } from '@product/product-price-changes/data-access';

const CUSTOMER_NUMBER_PATTERN = '^[0-9]*$';

@Component({
  selector: 'product-price-changes-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  styleUrls: ['login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @Input() clientNumberInformationUrl?: string;
  @Input() authenticationError: boolean | null = false;

  @Output()
  login = new EventEmitter<Login>();

  loginForm: FormGroup = new FormGroup({
    customerNumber: new FormControl('', [Validators.required, Validators.pattern(CUSTOMER_NUMBER_PATTERN)]),
    lastName: new FormControl('', [Validators.required]),
  });

  doLogin(loginDetails: Login): void {
    if (this.loginForm.valid) {
      this.login.emit(loginDetails);
    } else {
      this.loginForm.markAsTouched();
    }
  }
}

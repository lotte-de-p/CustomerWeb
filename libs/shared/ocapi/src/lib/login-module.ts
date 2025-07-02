import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './components';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}

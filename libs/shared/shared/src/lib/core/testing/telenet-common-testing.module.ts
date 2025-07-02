import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [HttpClientModule, ReactiveFormsModule, FormsModule, CommonModule],
  exports: [HttpClientModule, ReactiveFormsModule, FormsModule, CommonModule],
})
export class TgTelenetTestingModule {
  static forRoot(): ModuleWithProviders<TgTelenetTestingModule> {
    return {
      ngModule: TgTelenetTestingModule,
      providers: [{ provide: 'Window', useValue: window }, FormGroupDirective],
    };
  }
}

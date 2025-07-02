import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibilitySpanComponent, IconComponent } from '@general/ui-search';

@Component({
  selector: 'tg-foundation-general-search-brand-logo',
  standalone: true,
  imports: [CommonModule, IconComponent, AccessibilitySpanComponent],
  templateUrl: './brand-logo.component.html',
})
export class BrandLogoComponent {}

import { Component, Input } from '@angular/core';
import { Type } from '@care-service-cases/service-case/data-access';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'care-service-case-icon',
  imports: [CommonModule],
  templateUrl: './service-case-icon.component.html',
})
export class ServiceCaseIconComponent {
  @Input() type: Type | undefined;
  @Input() size: 'icon-lg' | 'icon-md' | 'icon-sm' = 'icon-md';

  getIcon(type: Type): string {
    switch (type) {
      case Type.MOVE:
        return 'icon-deliveryvan';
      case Type.TAKEOVER:
        return 'icon-mobile-arrow-mobile';
      case Type.REPAIR:
      case Type.INSTALL:
        return 'icon-tool';
      case Type.HOME_DELIVERY:
        return 'icon-house';
      default:
        return 'icon-others';
    }
  }
}

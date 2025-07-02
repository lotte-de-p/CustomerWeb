import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ESimActivationComponent } from '@sim-management/activation/feat-e-sim-activation';

@Component({
  selector: 'tg-sim-management-e-sim-activation-local',
  standalone: true,
  imports: [CommonModule, ESimActivationComponent],
  templateUrl: './e-sim-activation-local.component.html',
})
export class ESimActivationLocalComponent {}

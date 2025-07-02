import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimActivationComponent } from '@sim-management/activation/feat-sim-activation';

@Component({
  selector: 'tg-sim-management-sim-activation-local',
  standalone: true,
  imports: [CommonModule, SimActivationComponent],
  templateUrl: './sim-activation-local.component.html',
})
export class SimActivationLocalComponent {}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ModuleFederatedDebugInfoService } from './module-federated-debug-info.service';

@Component({
  selector: 'app-debug-info',
  template: ` <div
    *ngIf="isDebug$ | async"
    class="horizontal-center-align flex-direction--column align-items--center background-dark-brown color-white border-radius__all--l p--m">
    <h3>Shared libraries</h3>
    <p class="pre">{{ sharedLibraries$ | async | json }}</p>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .pre {
        white-space: pre;
      }
    `,
  ],
})
export class ModuleFederatedDebugInfoComponent {
  private readonly debugInfoService = inject(ModuleFederatedDebugInfoService);
  isDebug$ = this.debugInfoService.isDebug$;
  sharedLibraries$ = this.debugInfoService.sharedLibraries$;
}

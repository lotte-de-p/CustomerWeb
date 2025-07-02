/**
 * This is ported because there is no support for angular 15
 * https://github.com/mgechev/ngx-circular-player
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularPlayerComponent } from './circular-player.component';

@NgModule({
  declarations: [CircularPlayerComponent],
  imports: [CommonModule],
  exports: [CircularPlayerComponent],
})
export class CircularPlayerModule {}

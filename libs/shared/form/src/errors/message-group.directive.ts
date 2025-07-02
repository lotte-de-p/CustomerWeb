import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[messageGroup]',
})
export class MessageGroupDirective {
  @Input() messageGroup: string;
}

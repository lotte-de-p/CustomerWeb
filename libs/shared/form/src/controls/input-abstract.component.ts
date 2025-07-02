import { ControlValueAccessor, NgControl, ValidationErrors } from '@angular/forms';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { TrackingEvent } from '../interfaces';
import { FormErrorService, MessageGroupDirective } from '../errors';
import { LabelUtil } from '../utils';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'input-abstract-component',
  template: '',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class InputAbstractComponent implements ControlValueAccessor, OnInit, AfterViewInit {
  valueChangesSubscription$?: Subscription;
  formSubscription$: Subscription;
  @Input() messageGroup = '';
  @Input() labelPrefix?: string;
  @Input() error: unknown = undefined;
  @Input() formControlName: string;
  @Output() trackingEvent: EventEmitter<TrackingEvent> = new EventEmitter<TrackingEvent>();
  key: string;
  control: NgControl;

  constructor(
    public readonly languageService: LanguageService,
    public readonly formService: FormErrorService,
    @Optional() public readonly messageGroupDirective: MessageGroupDirective,
    public readonly injector: Injector
  ) {}

  ngOnInit(): void {
    this.control = this.injector?.get(NgControl);
    this.key = this.formControlName;
    this.initMessageGroup();
  }

  ngAfterViewInit(): void {
    this.valueChangesSubscription$ = this.control?.valueChanges?.pipe(untilDestroyed(this)).subscribe(() => {
      this.setError(this.control.errors);
    });
    this.formSubscription$ = this.formService.submit$.pipe(untilDestroyed(this)).subscribe(() => {
      this.setError(this.control.errors);
    });
  }

  initMessageGroup() {
    if (!this.messageGroup && this.messageGroupDirective && this.messageGroupDirective.messageGroup) {
      this.messageGroup = this.messageGroupDirective.messageGroup;
    }
  }

  getLabel(customLabel?: string): string {
    return LabelUtil.getLabelKeyWithTypeLabel(this.generateLabelKey(customLabel));
  }

  getTooltip(customLabel?: string): string {
    return LabelUtil.getLabelKeyWithTypeTooltip(this.generateLabelKey(customLabel));
  }

  setError(value?: ValidationErrors | null): void {
    if (value) {
      this.error = Object.keys(value)[0];
    } else {
      this.error = undefined;
    }
  }

  getPlaceholder(customLabel?: string): string {
    return LabelUtil.getLabelKeyWithTypePlaceholder(this.generateLabelKey(customLabel));
  }

  registerOnChange(_: unknown): void {
    // empty implementation
  }

  registerOnTouched(_fn: unknown): void {
    // empty implementation
  }

  setDisabledState(_isDisabled: boolean): void {
    // empty implementation
  }

  writeValue(_obj: unknown): void {
    // empty implementation
  }

  getText() {
    const keyList = [];
    if (this.messageGroup) {
      keyList.push(this.messageGroup);
    }
    if (this.labelPrefix) {
      keyList.push(this.labelPrefix);
    }
    keyList.push(this.formControlName.toString().toLowerCase());
    keyList.push(this.error?.toString()?.toLowerCase());
    return LabelUtil.getLabelKeyWithTypeError(keyList.join('.'));
  }

  private generateLabelKey(customLabel?: string) {
    const keyList = [];
    if (this.messageGroup) {
      keyList.push(this.messageGroup);
    }
    if (this.labelPrefix) {
      keyList.push(this.labelPrefix);
    }
    if (customLabel) {
      keyList.push(this.camelCaseToKebapCase(customLabel));
    } else {
      keyList.push(this.camelCaseToKebapCase(this.key || this.formControlName));
    }
    return keyList.join('.');
  }

  private camelCaseToKebapCase(input: string): string {
    return input
      ? input
          .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
          .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
          .toLowerCase()
      : '';
  }
}

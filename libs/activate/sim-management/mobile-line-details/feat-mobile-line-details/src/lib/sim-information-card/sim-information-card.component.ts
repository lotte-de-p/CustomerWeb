import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, Observable, of, skip, switchMap, tap } from 'rxjs';
import { MobileLine, SimManagementFacade, SimType } from '@sim-management/data-access';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'tg-sim-management-mobile-line-details-sim-information-card',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './sim-information-card.component.html',
  styleUrls: ['./sim-information-card.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimInformationCardComponent implements OnInit {
  @Input() mobileLine: MobileLine;
  @Output() unblockActionClick = new EventEmitter<MobileLine>();

  private readonly facade = inject(SimManagementFacade);
  private readonly isEditMobileLineNameInProgress = new BehaviorSubject<boolean>(false);

  isESimSwapReadyForActivation$: Observable<boolean | undefined> = this.facade.isESimSwapReadyForActivation$;
  isESimSwapInProgress$: Observable<boolean | undefined> = this.facade.isESimSwapInProgress$;
  isUnblockActionVisible$: Observable<boolean | undefined> = this.facade.isUnblockActionVisible$;
  isEditMobileLineNameInProgress$ = this.isEditMobileLineNameInProgress.asObservable();
  mobileLineForm: FormGroup;

  ngOnInit() {
    this.initMobileLineName();
    this.handleMobileLineNameChange();
  }

  get SimType(): typeof SimType {
    return SimType;
  }

  onUnblockClick(mobileLine: MobileLine) {
    this.unblockActionClick.emit(mobileLine);
  }

  private initMobileLineName() {
    this.mobileLineForm = new FormGroup({
      name: new FormControl(),
    });
    this.mobileLineForm.controls['name'].setValue(this.mobileLine?.name || '');
  }

  private handleMobileLineNameChange() {
    this.mobileLineForm.controls['name'].valueChanges
      .pipe(
        untilDestroyed(this),
        skip(1),
        tap(() => this.isEditMobileLineNameInProgress.next(true)),
        debounceTime(750),
        switchMap(() => of(this.mobileLine)),
        map((mobileLine) => ({
          mobileLine: mobileLine,
          mobileLineName: this.mobileLineForm.controls['name'].value,
        })),
        distinctUntilChanged((prev, curr) => prev.mobileLineName === curr.mobileLineName),
        tap(({ mobileLine, mobileLineName }) => {
          if (mobileLine) {
            this.facade.setMobileLineName(mobileLine, mobileLineName);
          }
          this.isEditMobileLineNameInProgress.next(false);
        })
      )
      .subscribe();
  }
}

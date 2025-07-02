import { ChangeDetectionStrategy, Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MobileLine, SimManagementFacade, SimStatus } from '@sim-management/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PhoneNumberPipe, SlideMenuComponent } from '@sim-management/ui';
import { Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'tg-activate-sim-management-mobile-line-selector',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslateModule, NgIf, NgFor, PhoneNumberPipe, SlideMenuComponent],
  templateUrl: './mobile-line-selector.component.html',
  styleUrl: './mobile-line-selector.component.scss',
})
export class SimManagementMobileLineSelectorComponent implements OnInit {
  @Output() mobileLineSelected = new EventEmitter<MobileLine>();

  private readonly facade = inject(SimManagementFacade);

  mobileLines: MobileLine[] = [];
  selectedMobileLine$: Observable<MobileLine | undefined> = this.facade.selectedMobileLine$;
  showMenu = false;
  selectedMobileLineInSessionStorage: string | null = sessionStorage.getItem('selectedMobileLine');

  get SimStatus(): typeof SimStatus {
    return SimStatus;
  }

  ngOnInit() {
    this.facade.mobileLines$.pipe(untilDestroyed(this)).subscribe((mobileLines: MobileLine[]) => {
      this.mobileLines = mobileLines;
    });

    this.facade.selectedMobileLine$
      .pipe(untilDestroyed(this))
      .subscribe((selectedMobileLine: MobileLine | undefined) => {
        if (!selectedMobileLine) {
          const mobileLineToSelect = this.mobileLines.find(
            (mobileLine) => mobileLine.msisdn === this.selectedMobileLineInSessionStorage
          );
          if (mobileLineToSelect) {
            this.selectMobileLine(mobileLineToSelect);
          } else {
            this.selectMobileLine(this.mobileLines[0]);
          }
        }
      });
  }

  selectMobileLine(mobileLine?: MobileLine): void {
    if (mobileLine) {
      this.mobileLineSelected.emit(mobileLine);
      sessionStorage.setItem('selectedMobileLine', mobileLine.msisdn);
      this.close();
    }
  }

  close() {
    this.showMenu = false;
  }

  open(event: Event) {
    event.stopPropagation();
    this.showMenu = true;
  }
}

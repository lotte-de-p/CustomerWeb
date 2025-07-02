import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PrintReturnLabelDialogComponent } from './print-return-label-dialog.component';
import { expect, jest } from '@jest/globals';

describe('PrintReturnLabelDialogComponent', () => {
  let component: PrintReturnLabelDialogComponent;
  let fixture: ComponentFixture<PrintReturnLabelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: 'Window',
          useValue: {},
        },
      ],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintReturnLabelDialogComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  describe(`when trying to print`, () => {
    it('printClick event gets emitted', () => {
      jest.spyOn(component.printClick, 'emit');

      component.print();

      expect(component.printClick.emit).toHaveBeenCalled();
    });
  });

  describe(`when trying to download`, () => {
    it('downloadClick event gets emitted', () => {
      jest.spyOn(component.downloadClick, 'emit');

      component.download();

      expect(component.downloadClick.emit).toHaveBeenCalled();
    });
  });

  describe(`when trying to close`, () => {
    it('closeClick event gets emitted', () => {
      jest.spyOn(component.closeClick, 'emit');

      component.close();

      expect(component.closeClick.emit).toHaveBeenCalled();
    });
  });
});

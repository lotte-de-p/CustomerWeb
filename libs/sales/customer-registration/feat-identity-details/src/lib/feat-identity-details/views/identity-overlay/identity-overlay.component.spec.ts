import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityOverlayComponent } from './identity-overlay.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('IdentityOverlayComponent', () => {
  let component: IdentityOverlayComponent;
  let fixture: ComponentFixture<IdentityOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        IdentityOverlayComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(IdentityOverlayComponent);
    component = fixture.componentInstance;
    component.brand = 'BASE';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.brand).toBe('BASE');
  });
  describe('close', () => {
    it('should emit on close', () => {
      jest.spyOn(component.closeOverlay, 'emit');
      component.close();
      expect(component.closeOverlay.emit).toHaveBeenCalled();
    });
  });
});

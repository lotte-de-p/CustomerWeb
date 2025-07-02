import { TestBed, inject } from '@angular/core/testing';
import { PdfService } from './pdf.service';

describe('PdfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdfService],
    });
  });

  it('should be of type Blob after conversion', inject([PdfService], (service: PdfService) => {
    const byteArray = service.convertBase64ToByteArray('VGhpcyBpcyBhIHRlc3Q=');
    const blob = service.convertByteArrayToBlob(byteArray);
    expect(isBlob(blob)).toBeTruthy();
  }));
});

function isBlob(blob: Blob): boolean {
  return 'Blob' in window && blob instanceof Blob;
}

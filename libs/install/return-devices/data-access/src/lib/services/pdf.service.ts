import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  convertBase64ToByteArray(base64: string): Uint8Array {
    return this.createByteArray(base64);
  }

  convertByteArrayToBlob(byteArray: Uint8Array): Blob {
    return new Blob([byteArray], { type: 'application/pdf' });
  }

  private createByteArray(base64: string): Uint8Array {
    const bytes = atob(base64);
    const byteNumbers = new Array(bytes.length);

    for (let i = 0; i < bytes.length; i++) {
      byteNumbers[i] = bytes.charCodeAt(i);
    }

    return new Uint8Array(byteNumbers);
  }
}

import { Inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JsonUrlService {
  private static readonly JSON_URL = 'JsonUrl';
  private readonly libng;

  constructor(@Inject('Window') private readonly window: Window) {
    this.libng =
      this.window[JsonUrlService.JSON_URL as keyof Window] &&
      this.window[JsonUrlService.JSON_URL as keyof Window]('lzma');
  }

  compress(object: unknown): Observable<string> {
    return from(this.libng.compress(object) as string);
  }

  decompress(compressedString: string): Observable<unknown> {
    return from(this.libng.decompress(compressedString));
  }
}

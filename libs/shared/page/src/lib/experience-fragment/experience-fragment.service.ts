import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageService } from '../page';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExperienceFragmentService {
  baseUrl = `/content/experience-fragments`;

  readonly #http = inject(HttpClient);
  readonly #languageService = inject(LanguageService);

  fetchExpFragment(experienceFragmentName: string, expFragmentLocation: string): Observable<string> {
    const expFragmentPath = this.generateExpFragmentFullPath(experienceFragmentName, expFragmentLocation);
    const expFragmentUrl = new URL(window.location.href).origin.concat(expFragmentPath);

    return this.#http
      .get(expFragmentUrl + '?wcmmode=disabled', { responseType: 'text' })
      .pipe(map((result) => this.getSectionContent(result)));
  }

  private generateExpFragmentFullPath(experienceFragmentName: string, expFragmentLocation: string): string {
    const breakpoint = /\/nl\/|\/fr\/|\/en\//;
    const splitPathWithLanguage = expFragmentLocation?.split(breakpoint);

    if (splitPathWithLanguage?.length >= 2 && experienceFragmentName) {
      return `${splitPathWithLanguage[0]}/${this.#languageService.getLanguage()}/${
        splitPathWithLanguage[1]
      }/${experienceFragmentName}`;
    }
    return '';
  }

  private getSectionContent(result: string): string {
    const startStr = '<div class="cmp cmp-responsivegrid">';
    const endStrPos = result.lastIndexOf('</div>');
    return result.slice(result.indexOf(startStr), endStrPos);
  }
}

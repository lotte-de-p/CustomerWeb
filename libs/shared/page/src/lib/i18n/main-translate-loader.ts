import { TranslateLoader } from '@ngx-translate/core';
import { inject, Inject, Injectable } from '@angular/core';
import { isEmpty } from 'lodash-es';
import { Observable } from 'rxjs';
import { PathCategorisationService } from '../page';

@Injectable()
export class TelenetTranslateLoader implements TranslateLoader {
  private readonly pathCategorisationService = inject(PathCategorisationService);
  private readonly postfixes = this.pathCategorisationService.getPostfixVariables();

  constructor(@Inject('Window') public window: Window) {
    this.initializeBrandAndCategoryLabels();
  }

  private initializeBrandAndCategoryLabels() {
    this.getTranslationData().subscribe((labelSet) => {
      for (const keyWithBrandOrCategory in labelSet) {
        this.overwriteOriginalLabelWithBrandOrCategorySpecificLabel(labelSet, keyWithBrandOrCategory);
      }
    });
  }

  private overwriteOriginalLabelWithBrandOrCategorySpecificLabel(
    labelSet: Record<string, string>,
    keyWithBrandOrCategory: string
  ) {
    const postfix = this.getPostfix(keyWithBrandOrCategory);
    if (postfix) {
      const keyWithoutCategoryOrBrand = keyWithBrandOrCategory.replace(new RegExp(postfix + '$'), '');
      if (labelSet[keyWithoutCategoryOrBrand] !== undefined) {
        labelSet[keyWithoutCategoryOrBrand] = labelSet[keyWithBrandOrCategory];
      }
    }
  }

  private getPostfix(property: string) {
    return (
      [this.postfixes.BRAND_CATEGORY_POSTFIX, this.postfixes.CATEGORY_POSTFIX, this.postfixes.BRAND_POSTFIX].find(
        (postfix) => property.endsWith(postfix)
      ) || null
    );
  }

  public getTranslation(_lang: string): Observable<unknown> {
    return this.getTranslationData();
  }

  private getTranslationData(): Observable<Record<string, string>> {
    return new Observable<Record<string, string>>((observer) => {
      if (!isEmpty(this.window?.['localisationData']?.keys)) {
        observer.next(this.window['localisationData'].keys);
        observer.complete();
      } else if (this.window?.['pageLocaleData']?.bundle) {
        observer.next(this.window['pageLocaleData'].bundle);
        observer.complete();
      } else {
        observer.next({});
        observer.complete();
        console.log('NG Translations could not be loaded');
      }
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { SearchResultItem } from '@general/data-access-search';

@Pipe({
  name: 'tlnProductTags',
  standalone: true,
})
export class TlnProductTagsPipe implements PipeTransform {
  transform(value: SearchResultItem): string[] {
    return value.product?.tags && value.product?.tags.length > 0
      ? value.product?.tags.filter(
          (tag) =>
            tag.startsWith('cp_label') ||
            tag.startsWith('vp_label') ||
            tag.startsWith('online_excl') ||
            tag.startsWith('pre_order_label')
        )
      : [];
  }
}

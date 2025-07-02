import { TlnProductTagsPipe } from './tln-product-tags.pipe';
import { SearchResultItem } from '@general/data-access-search';

describe('TlnProductTagsPipe', () => {
  it('create an instance', () => {
    const pipe = new TlnProductTagsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return tags when there are tags', function () {
    const tags = [
      'cp_label|Label goes here',
      'cp_label_base|Label goes here',
      'cp_label_random_string|Label goes here',
      'vp_label|Label goes here',
      'vp_label_base|Label goes here',
      'vp_label_random_string|Label goes here',
      'online_excl|Label goes here',
      'online_excl_base|Label goes here',
      'online_excl_random_string|Label goes here',
      'pre_order_label|Label goes here',
      'pre_order_label_base|Label goes here',
      'pre_order_label_random_string|Label goes here',
    ];
    const searchResultItem = { product: { tags: tags } } as SearchResultItem;

    const pipe = new TlnProductTagsPipe();
    expect(pipe.transform(searchResultItem)).toStrictEqual(tags);
  });

  it('should return no tags when there are no valid tags', function () {
    const tags = [
      'test',
      '_cp_label Label goes here',
      '_vp_label Label goes here',
      '_online_excl Label goes here',
      '_pre_order_label Label goes here',
    ];
    const searchResultItem = { product: { tags: tags } } as SearchResultItem;

    const pipe = new TlnProductTagsPipe();
    expect(pipe.transform(searchResultItem)).toStrictEqual([]);
  });

  it('should return an empty array when no tags available', function () {
    const searchResultItem = { product: {} } as SearchResultItem;

    const pipe = new TlnProductTagsPipe();
    expect(pipe.transform(searchResultItem)).toStrictEqual([]);
  });
});

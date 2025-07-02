import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { LanguageEnum } from '@telenet/ng-lib-page';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { describe, it, beforeEach, expect, afterEach } from '@jest/globals';
import { ProductMsaMapper } from './product-msa.mapper';

const productMsa = require('./product-msa.json');

describe('ProductLineMapper', () => {
  let productMsaMapper: ProductMsaMapper;

  const setLang = (type: string) => {
    return {
      document: {
        documentElement: {
          lang: type,
        },
      },
    };
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmapiProductMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    TestBed.overrideProvider('Window', {
      useValue: setLang(LanguageEnum.NL),
    });
    productMsaMapper = TestBed.inject(ProductMsaMapper);
  });

  it('toModel', () => {
    const actual = productMsaMapper.toModel(productMsa);
    expect(actual.length).toEqual(1);
    expect(actual[0].masterAgreementName).toEqual('BALCAEN ET FILS 1468');
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

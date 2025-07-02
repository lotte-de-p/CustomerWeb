import { SalesRedirectUrlBuilderFactory } from './sales-redirect-url.builder';

describe('SalesRedirectUrlBuilderFactory', () => {
  const SALES_URL = 'https://www.int.base.be/en/sales';
  const encodedString = 'XQAAAAIjAAAAAAAAAABAqYnmbFEIbVbO7gEot3B4b5SZE4CcYhLtXznaU-11lNN2skEPH_5a__-ONgAA';

  describe('build', () => {
    it('should build sales redirect url given intent, cid, compressedJson', () => {
      const actual = SalesRedirectUrlBuilderFactory.buildRedirection()
        .addFlowParam(SALES_URL + '?cid=1234', true)
        .addIntentParam('hardware')
        .addSDataParam(encodedString)
        .build();
      expect(actual).toBe(
        'https://www.int.base.be/en/sales?cid=1234&flow=marketing&intent=hardware&sdata=XQAAAAIjAAAAAAAAAABAqYnmbFEIbVbO7gEot3B4b5SZE4CcYhLtXznaU-11lNN2skEPH_5a__-ONgAA'
      );
    });
    it('should build sales redirect url without intent given cid, compressedJson and intent is empty', () => {
      const actual = SalesRedirectUrlBuilderFactory.buildRedirection()
        .addFlowParam(SALES_URL + '?cid=5678', true)
        .addIntentParam('')
        .addSDataParam(encodedString)
        .build();
      expect(actual).toBe(
        'https://www.int.base.be/en/sales?cid=5678&flow=marketing&sdata=XQAAAAIjAAAAAAAAAABAqYnmbFEIbVbO7gEot3B4b5SZE4CcYhLtXznaU-11lNN2skEPH_5a__-ONgAA'
      );
    });
    it('should build sales redirect url without manual discount given intent, compressedJson', () => {
      const actual = SalesRedirectUrlBuilderFactory.buildRedirection()
        .addFlowParam(SALES_URL, true)
        .addIntentParam('domain-name')
        .addSDataParam(encodedString)
        .build();
      expect(actual).toBe(
        'https://www.int.base.be/en/sales&flow=marketing&intent=domain-name&sdata=XQAAAAIjAAAAAAAAAABAqYnmbFEIbVbO7gEot3B4b5SZE4CcYhLtXznaU-11lNN2skEPH_5a__-ONgAA'
      );
    });
  });
});

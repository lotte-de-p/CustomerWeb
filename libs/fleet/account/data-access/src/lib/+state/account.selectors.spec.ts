import { selectNextPage, selectPhoneNumber } from './account.selectors';

describe('selectors', () => {
  const initialtstate = { nextPage: 'next-page', phoneNumber: '0471232425' };

  it('should select nextPage from Store', () => {
    const result = selectNextPage.projector(initialtstate);

    expect(result).toEqual(initialtstate.nextPage);
  });

  it('should select phoneNumber from Store', () => {
    const result = selectPhoneNumber.projector(initialtstate);

    expect(result).toEqual(initialtstate.phoneNumber);
  });
});

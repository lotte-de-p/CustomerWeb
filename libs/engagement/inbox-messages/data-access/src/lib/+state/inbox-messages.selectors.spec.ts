import { initialState } from './inbox-messages.state';
import * as selectors from './inbox-messages.selectors';
import { selectLoadError, selectLoading } from './inbox-messages.selectors';

describe('InboxMessages Selectors', () => {
  it('should select inbox messages from the store', () => {
    const result = selectors.selectInboxMessages.projector(initialState);
    expect(result).toEqual(initialState.inboxMessagesEntries);
  });

  it('should select the load error', () => {
    const result = selectLoadError.projector({
      ...initialState,
      loadError: 'This is a load error',
    });

    expect(result).toEqual('This is a load error');
  });

  it('should select the loading flag', () => {
    const result = selectLoading.projector({
      ...initialState,
      loading: true,
    });

    expect(result).toBe(true);
  });
});

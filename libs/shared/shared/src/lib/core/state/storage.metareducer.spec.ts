import { createStorageMetaReducer } from './storage.metareducer';
import { createReducer } from '@ngrx/store';

let storageMock = {};

const dummyState = {
  testState: {
    var1: 'one',
  },
};

const dummyReducer = createReducer(dummyState);
const storageKey = 'testKey';

describe('createStorageMetaReducer', () => {
  const partialStateStringified = '{"testState":{"var1":"currentVar"}}';

  beforeAll(() => {
    storageMock = {};
  });

  it('should return a function', () => {
    const storageMetaReducer = createStorageMetaReducer(storageKey, ['testState']);
    expect(typeof storageMetaReducer).toBe('function');
  });

  it('should return a meta reducer function', () => {
    const storageMetaReducer = createStorageMetaReducer('storageKey', ['testState']);
    const metaReducer = storageMetaReducer(dummyReducer); // Replace with your actual reducer
    expect(typeof metaReducer).toBe('function');
  });

  it('should initialize state with saved state on first call', () => {
    const stateKeys = ['testState'];
    const storageMetaReducer = createStorageMetaReducer(storageKey, stateKeys);

    const metaReducer = storageMetaReducer(dummyReducer);

    storageMock[storageKey] = '{"testState":{"var1":"var1-initial"}}';
    // either of these lines will work, different syntax that does the same thing:
    global.Storage.prototype.getItem = jest.fn((key) => {
      return storageMock[key];
    });

    const initialState = metaReducer(undefined, { type: 'INIT' });
    expect(initialState).toEqual({
      testState: {
        var1: 'var1-initial',
      },
    });
  });

  it('should save state to storage on subsequent calls', () => {
    const stateKeys = ['testState'];
    const storageMetaReducer = createStorageMetaReducer(storageKey, stateKeys);

    const setStorageItemMock = jest.fn((key, value) => {
      return (storageMock[key] = value);
    });
    global.Storage.prototype.setItem = setStorageItemMock;

    const metaReducer = storageMetaReducer(dummyReducer);

    const currentState = {
      testState: {
        var1: 'currentVar',
      },
    };
    metaReducer(currentState, { type: 'INIT' });
    const nextState = metaReducer(currentState, { type: 'ACTION' });

    expect(nextState).toEqual(currentState);
    expect(storageMock[storageKey]).toEqual(partialStateStringified);
    expect(setStorageItemMock).toHaveBeenCalledWith(storageKey, partialStateStringified);
  });

  it('should deep merge states properly', () => {
    const stateKeys = ['testState'];
    const storageMetaReducer = createStorageMetaReducer(storageKey, stateKeys);

    const metaReducer = storageMetaReducer(dummyReducer);

    storageMock[storageKey] = '{"testState":{"var1":"from-storage"}}';
    // either of these lines will work, different syntax that does the same thing:
    global.Storage.prototype.getItem = jest.fn((key) => {
      return storageMock[key];
    });

    const defaultState = {
      testState: {
        var1: 'overwritten',
        var2: 'two',
      },
    };

    const state = metaReducer(defaultState, { type: 'INIT' });
    expect(state).toEqual({
      testState: {
        var1: 'from-storage',
        var2: 'two',
      },
    });
  });

  it('should pick part of the state', () => {
    const stateKeys = ['testState.var1'];
    const storageMetaReducer = createStorageMetaReducer(storageKey, stateKeys);

    const setStorageItemMock = jest.fn((key, value) => {
      return (storageMock[key] = value);
    });
    global.Storage.prototype.setItem = setStorageItemMock;

    const metaReducer = storageMetaReducer(dummyReducer);

    const currentState = {
      testState: {
        var1: 'currentVar',
        var: 'dummy',
      },
    };
    metaReducer(currentState, { type: 'INIT' });
    const nextState = metaReducer(currentState, { type: 'ACTION' });

    expect(nextState).toEqual(currentState);
    expect(storageMock[storageKey]).toEqual(partialStateStringified);
    expect(setStorageItemMock).toHaveBeenCalledWith(storageKey, partialStateStringified);
  });

  afterEach(() => {
    storageMock = {};
  });
});

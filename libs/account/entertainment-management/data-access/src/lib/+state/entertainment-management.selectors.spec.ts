import { initialState } from './entertainment-management.reducer';
import {
  selectActiveOptions,
  selectAvailableContentPacks,
  selectAvailableStreamingOptions,
  selectEntertainmentManagementError,
  selectEntertainmentManagementLoading,
  selectEntertainmentOptionDetails,
  selectEntertainmentOptionDetailsType,
} from './entertainment-management.selectors';

const ERROR_MSG = 'This is an error';

describe('hardware discount selectors', () => {
  it('should select active entertainment options from the store', () => {
    const result = selectActiveOptions.projector({
      ...initialState,
      entertainmentManagement: {
        activeOptions: [
          {
            name: {
              fr: 'Streamz Base',
              nl: 'Streamz Basis',
              en: 'Streamz Basic',
            },
            weight: 10,
            logo: 'www.google.com/logo1',
          },
        ],
        loadError: undefined,
        loading: false,
      },
    });

    expect(result).toEqual([
      {
        name: {
          fr: 'Streamz Base',
          nl: 'Streamz Basis',
          en: 'Streamz Basic',
        },
        weight: 10,
        logo: 'www.google.com/logo1',
      },
    ]);
  });

  it('should select content packs from entertainment options from the store', () => {
    const result = selectAvailableContentPacks.projector({
      ...initialState,
      entertainmentManagement: {
        availableContentPacks: [
          {
            name: {
              en: 'Play Sports',
              nl: 'Speel Sporten',
              fr: 'Joue Sports',
            },
            weight: 10,
            logo: 'www.google.com/logo2',
          },
        ],
        loadError: undefined,
        loading: false,
      },
    });

    expect(result).toEqual([
      {
        name: {
          en: 'Play Sports',
          nl: 'Speel Sporten',
          fr: 'Joue Sports',
        },
        weight: 10,
        logo: 'www.google.com/logo2',
      },
    ]);
  });

  it('should select streaming options from entertainment options from the store', () => {
    const result = selectAvailableStreamingOptions.projector({
      ...initialState,
      entertainmentManagement: {
        availableStreamingOptions: [
          {
            name: {
              fr: 'Streamz',
              nl: 'Streamz',
              en: 'Streamz',
            },
            weight: 10,
            logo: 'www.google.com/logo3',
          },
        ],
        loadError: undefined,
        loading: false,
      },
    });

    expect(result).toEqual([
      {
        name: {
          fr: 'Streamz',
          nl: 'Streamz',
          en: 'Streamz',
        },
        weight: 10,
        logo: 'www.google.com/logo3',
      },
    ]);
  });

  it('should select entertainment management loading data from the store', () => {
    const result = selectEntertainmentManagementLoading.projector({
      ...initialState,
      entertainmentManagement: {
        loading: true,
        loadError: ERROR_MSG,
      },
    });

    expect(result).toEqual(true);
  });

  it('should select entertainment management error data from the store', () => {
    const result = selectEntertainmentManagementError.projector({
      ...initialState,
      entertainmentManagement: {
        loading: true,
        loadError: ERROR_MSG,
      },
    });

    expect(result).toEqual(ERROR_MSG);
  });

  it('should select active entertainment options details type from the store', () => {
    const result = selectEntertainmentOptionDetailsType.projector({
      ...initialState,
      entertainmentOptionDetails: {
        type: 'standalone',
        name: {
          fr: 'Play More',
          nl: 'Play More',
          en: 'Play More',
        },
        weight: 10,
        logo: 'www.google.com/logo5',
      },
    });

    expect(result).toEqual('standalone');
  });

  it('should select active entertainment options details from the store', () => {
    const result = selectEntertainmentOptionDetails.projector({
      ...initialState,
      entertainmentOptionDetails: {
        name: {
          fr: 'Play More',
          nl: 'Play More',
          en: 'Play More',
        },
        weight: 10,
        logo: 'www.google.com/logo6',
      },
    });

    expect(result).toEqual({
      name: {
        fr: 'Play More',
        nl: 'Play More',
        en: 'Play More',
      },
      weight: 10,
      logo: 'www.google.com/logo6',
    });
  });
});

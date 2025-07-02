import { EntertainmentOption } from '../entities/entertainment-management.interface';
import {
  loadEntertainmentManagementOptions,
  loadEntertainmentManagementFailure,
  loadEntertainmentManagementSuccess,
  loadEntertainmentOptionDetails,
  loadEntertainmentOptionDetailsSuccess,
  loadEntertainmentOptionDetailsFailure,
} from './entertainment-management.actions';
import { initialState, entertainmentManagementFeature, Entertainment } from './entertainment-management.reducer';

describe('hardware discount reducer', () => {
  it('should return initial state', () => {
    const action = {
      type: 'Unknown',
    };

    const state = entertainmentManagementFeature.reducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  describe('loadEntertainmentManagementOptions', () => {
    it('should set the loading flag to true', () => {
      const action = loadEntertainmentManagementOptions();

      const state = entertainmentManagementFeature.reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        entertainmentManagement: {
          ...initialState.entertainmentManagement,
          loading: true,
        },
      });
    });
  });

  describe('loadEntertainmentManagementSuccess', () => {
    it('should save the new hardware discount data in the state', () => {
      const entertainmentManagementObj: Entertainment = {
        activeOptions: [],
        availableContentPacks: [
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
        availableStreamingOptions: [],
        loading: false,
        loadError: undefined,
      };
      const action = loadEntertainmentManagementSuccess({ entertainmentManagementObject: entertainmentManagementObj });

      const state = entertainmentManagementFeature.reducer(
        {
          ...initialState,
        },
        action
      );

      expect(state).toEqual({
        ...initialState,
        entertainmentManagement: {
          activeOptions: [],
          availableContentPacks: [
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
          availableStreamingOptions: [],
          isEntLoaded: true,
          loading: false,
          loadError: undefined,
        },
      });
    });
  });

  describe('loadEntertainmentManagementFailure', () => {
    it('should return failure state', () => {
      const action = loadEntertainmentManagementFailure({ error: 'this is a mgmt error' });

      const state = entertainmentManagementFeature.reducer(
        {
          ...initialState,
          entertainmentManagement: {
            activeOptions: [],
            availableContentPacks: [],
            availableStreamingOptions: [],
            loading: false,
            loadError: undefined,
          },
        },
        action
      );

      expect(state).toEqual({
        ...initialState,
        entertainmentManagement: {
          activeOptions: [],
          availableContentPacks: [],
          availableStreamingOptions: [],
          loading: false,
          loadError: 'this is a mgmt error',
        },
      });
    });
  });

  describe('loadEntertainmentOptionDetails', () => {
    it('should set the loading flag to true', () => {
      const action = loadEntertainmentOptionDetails();

      const state = entertainmentManagementFeature.reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        entertainmentOptionDetails: {
          ...initialState.entertainmentOptionDetails,
        },
      });
    });
  });

  describe('loadEntertainmentOptionDetailsSuccess', () => {
    it('should save the new option details in the state', () => {
      const entertainmentOptionDetails: EntertainmentOption = {
        name: {
          fr: 'Play More',
          nl: 'Play More',
          en: 'Play More',
        },
        weight: 10,
        logo: 'www.google.com/logo4',
      };
      const action = loadEntertainmentOptionDetailsSuccess({
        entertainmentManagementObject: entertainmentOptionDetails,
      });

      const state = entertainmentManagementFeature.reducer(
        {
          ...initialState,
        },
        action
      );

      expect(state).toEqual({
        entertainmentManagement: {
          activeOptions: [],
          availableContentPacks: [],
          availableStreamingOptions: [],
          loading: false,
          loadError: undefined,
        },
        entertainmentOptionDetails: {
          name: {
            fr: 'Play More',
            nl: 'Play More',
            en: 'Play More',
          },
          weight: 10,
          logo: 'www.google.com/logo4',
        },
      });
    });
  });

  describe('loadEntertainmentOptionDetailsFailure', () => {
    it('should return details failure state', () => {
      const action = loadEntertainmentOptionDetailsFailure({ error: 'this is an error' });

      const state = entertainmentManagementFeature.reducer(
        {
          ...initialState,
          entertainmentOptionDetails: {
            name: {
              fr: '',
              nl: '',
              en: '',
            },
            weight: 0,
            logo: '',
          },
        },
        action
      );

      expect(state).toEqual({
        ...initialState,
        entertainmentOptionDetails: {
          name: {
            fr: '',
            nl: '',
            en: '',
          },
          weight: 0,
          logo: '',
        },
      });
    });
  });
});

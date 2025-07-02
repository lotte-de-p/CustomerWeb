import { useEffect, useGlobals } from '@storybook/addons';

const localhostURL = 'http://localhost:8080';

// @ts-ignore
const mock = {
  'ocapi-url': localhostURL,
  'oauth-url': localhostURL,
  'openid-url': localhostURL,
  'omapi-url': localhostURL + '/omapi',
  'oauth-client-id': 'ocapi',
};

const environmentConfig = function (env: string) {
  return {
    'ocapi-url': `https://api.${env}.telenet.be/ocapi`,
    'oauth-url': `https://login.${env}.telenet.be/openid/oauth/authorize`,
    'openid-url': `https://login.${env}.telenet.be/openid`,
    'omapi-url': `https://api.${env}.telenet.be/omapi`,
    'oauth-client-id': 'ocapi',
  };
};

export const apiConfig = (StoryFn: () => unknown) => {
  const [{ environment }] = useGlobals();

  useEffect(() => {
    if (environment === 'Mock') {
      window['Config'] = mock;
    } else {
      window['Config'] = environmentConfig(environment.toLowerCase());
    }
  }, [environment]);

  return StoryFn();
};

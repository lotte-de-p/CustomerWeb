import { useEffect, useGlobals } from '@storybook/addons';

const localhost = 'http://localhost:8080';

// @ts-ignore
const mock = {
  'ocapi-url': localhost,
  'oauth-url': localhost,
  'openid-url': localhost,
  'oauth-client-id': 'ocapi',
};

const envConfig = function (env: string) {
  return {
    'ocapi-url': `https://api.${env}.telenet.be/ocapi`,
    'oauth-url': 'https://login.${env}.telenet.be/openid/oauth/authorize',
    'openid-url': 'https://login.${env}.telenet.be/openid',
    'oauth-client-id': 'ocapi',
  };
};

export const apiConfig = (StoryFn: () => unknown) => {
  const [{ environment }] = useGlobals();

  useEffect(() => {
    if (environment === 'Mock') {
      window['Config'] = mock;
    } else {
      window['Config'] = envConfig(environment.toLowerCase());
    }
  }, [environment]);

  return StoryFn();
};

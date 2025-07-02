import { useEffect, useGlobals } from '@storybook/addons';

const localhost = 'http://localhost:8080';

// @ts-ignore
const mock = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

const envConfig = function (env) {
  return {
    'ocapi-url': `https://api.${env}.telenet.be/ocapi`,
    'openid-auth-url': 'https://login.${env}.telenet.be/openid/oauth/authorize',
    'openid-url': 'https://login.${env}.telenet.be/openid',
    'openid-client-id': 'ocapi',
  };
};

export const apiConfig = (StoryFn) => {
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

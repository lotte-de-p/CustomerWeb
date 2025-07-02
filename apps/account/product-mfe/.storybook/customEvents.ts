import { useEffect, useGlobals } from '@storybook/addons';

export const handleCustomEvents = (StoryFn: () => unknown) => {
  const [{ selectedMsisdn, locale }] = useGlobals();

  useEffect(() => {
    document.dispatchEvent(
      new CustomEvent('selectedAccountModified', {
        bubbles: true,
        detail: { selectedAccount: { msisdn: selectedMsisdn } },
      })
    );
  }, [selectedMsisdn]);

  useEffect(() => {
    document.dispatchEvent(
      new CustomEvent('changeLanguage', {
        detail: { locale },
      })
    );
    document.documentElement.lang = locale;
  }, [locale]);

  return StoryFn();
};

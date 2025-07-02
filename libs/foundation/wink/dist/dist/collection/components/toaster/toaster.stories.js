import { html } from "lit-html";
import { repeat } from "../../assets/shared/scripts/utils";
import { BADGES } from "../../models";
import { STORY_CATEGORIES } from "../../models/categories.types";
import * as ToastStory from "./_sub-comps/toast/toast.stories";
import { TOAST_TYPES } from "./_sub-comps/toast/models/toast.types";
const feedback = 'feedback';
export default {
    title: 'COMPONENTS/Toast',
    component: 'Toaster',
    parameters: {
        badges: [BADGES.new],
        layout: 'fullscreen',
        html: {
            transform: (code) => {
                return code.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<wink-button\b[^<]*(?:(?!<\/wink-button>)<[^<]*)*<\/wink-button>/g, '');
            },
        },
    },
    argTypes: {
        showCreateToast: {
            control: 'boolean',
            description: 'Show the create toast button to preview how toasts can be programmatically created',
            table: {
                defaultValue: { summary: 'true' },
                category: STORY_CATEGORIES.sp,
            },
        },
        exampleToasts: {
            control: { type: 'number', min: 0, max: 5 },
            description: 'Allows you to add or remove additional toast items within the container to observe and test the behavior of the layout.',
            table: {
                defaultValue: { summary: '1' },
                category: STORY_CATEGORIES.sp,
            },
        },
        text: {
            ...ToastStory.default.argTypes.text,
        },
        appearance: {
            ...ToastStory.default.argTypes.appearance,
        },
        appearanceFeedback: {
            ...ToastStory.default.argTypes.appearanceFeedback,
            if: { arg: 'appearance', eq: feedback },
        },
        duration: {
            ...ToastStory.default.argTypes.duration,
            if: { arg: 'appearance', eq: feedback },
        },
        href: {
            ...ToastStory.default.argTypes.href,
            if: { arg: 'appearance', eq: TOAST_TYPES.actionable },
        },
        target: {
            ...ToastStory.default.argTypes.target,
            if: { arg: 'appearance', eq: TOAST_TYPES.actionable },
        },
        linkText: {
            ...ToastStory.default.argTypes.linkText,
            if: { arg: 'appearance', eq: TOAST_TYPES.actionable },
        },
        isOpen: {
            ...ToastStory.default.argTypes.isOpen,
        },
    },
    args: {
        appearance: TOAST_TYPES.actionable,
        appearanceFeedback: TOAST_TYPES.positive,
        text: 'De notificatie is succesvol verwijderd',
        linkText: 'Open Link',
        href: '#',
        target: '_self',
        duration: '0',
        exampleToasts: 1,
        showCreateToast: true,
        isOpen: true,
    },
    render: (args, { globals: { brand, theme } }) => html ` ${args.showCreateToast
        ? html `<script>
              const createToast = async (params) => {
                await customElements.whenDefined('wink-toaster');
                const toasterElement = document.querySelector('wink-toaster');
                await toasterElement.winkCreateToast(params);
              };
            </script>
            <wink-button
              onClick="createToast({
                appearance: '${args.appearance === feedback ? args.appearanceFeedback : args.appearance}',
                text: '${args.text}',
                duration: '${args.duration}',
                href: '${args.href}',
                target: '${args.target}',
                linkText: '${args.linkText}'
              })"
              text="Create Toast"
              element="button"
              type="button"
              appearance="primary"
              size="md"
              status="none">
            </wink-button>`
        : ''}
      <wink-toaster>
        ${repeat(args.exampleToasts, html `
            ${args.appearance === feedback
        ? html ` <wink-toast
                  theme="${theme}-theme"
                  current-theme="${theme}-theme"
                  brand="${brand}"
                  is-open
                  appearance="${args.appearanceFeedback}"
                  text="${args.text}"
                  duration="${args.duration}">
                </wink-toast>`
        : html ` <wink-toast
                  theme="${theme}-theme"
                  current-theme="${theme}-theme"
                  brand="${brand}"
                  is-open
                  test
                  appearance="${args.appearance}"
                  text="${args.text}"
                  href="${args.href}"
                  target="${args.target}"
                  linkText="${args.linkText}">
                </wink-toast>`}
          `)}
      </wink-toaster>`,
};
export const Default = {
    parameters: {
        controls: {
            exclude: ['isOpen'],
        },
    },
};
//# sourceMappingURL=toaster.stories.js.map

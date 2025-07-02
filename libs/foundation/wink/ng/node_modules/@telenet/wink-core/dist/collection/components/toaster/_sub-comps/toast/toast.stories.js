import { html } from "lit-html";
import { BADGES } from "../../../../models";
import { TOAST_TYPES } from "./models/toast.types";
import * as LinkStory from "../../../link/link.stories";
const toastText = 'Toast feedback';
const feedback = 'feedback';
export default {
    title: 'COMPONENTS/Toast/ToastElement',
    component: 'Toast',
    tags: ['hidden'],
    parameters: {
        badges: [BADGES.new],
        layout: 'fullscreen',
    },
    argTypes: {
        text: {
            control: 'text',
            description: 'The text property specifies the textual content to be displayed in the toast.',
            table: {
                defaultValue: { summary: toastText },
            },
            type: { name: 'string', required: true },
        },
        appearance: {
            control: 'inline-radio',
            options: [TOAST_TYPES.actionable, feedback],
            description: 'The appearance property allows selection from predefined types of toast to display within the user interface.',
            table: {
                defaultValue: { summary: TOAST_TYPES.actionable },
            },
        },
        appearanceFeedback: {
            control: 'inline-radio',
            options: [TOAST_TYPES.positive, TOAST_TYPES.negative],
            description: 'The appearance property allows selection from predefined types of toast to display within the user interface.',
            if: { arg: 'appearance', eq: feedback },
            table: {
                defaultValue: { summary: TOAST_TYPES.positive },
            },
        },
        duration: {
            control: {
                type: 'number',
                min: 0,
                max: 12000,
                step: 100,
            },
            description: 'The duration property specifies the length of time that the toast should be displayed within the user interface. When setting the duration as 0 the toast will stay open until explicitly closed by the user. This will also not work for the actionable toast type as these should never be auto-dismissed.',
            if: { arg: 'appearance', eq: feedback },
            table: {
                defaultValue: { summary: 6000 },
            },
        },
        href: {
            ...LinkStory.default.argTypes.href,
            if: { arg: 'appearance', eq: TOAST_TYPES.actionable },
        },
        target: {
            ...LinkStory.default.argTypes.target,
            if: { arg: 'appearance', eq: TOAST_TYPES.actionable },
        },
        linkText: {
            ...LinkStory.default.argTypes.slot,
            if: { arg: 'appearance', eq: TOAST_TYPES.actionable },
        },
        isOpen: {
            control: 'boolean',
            description: 'The isOpen property, when set to true, indicates that the toast message is visible to the user.',
            table: {
                defaultValue: { summary: 'true' },
            },
        },
    },
    args: {
        isOpen: true,
        appearance: TOAST_TYPES.actionable,
        text: 'Set title/heading text.',
        linkText: 'Set link text.',
        href: 'Set link destination.',
        target: '_self',
        duration: '0',
    },
    render: (args, { globals: { brand, theme } }) => {
        if (args.appearance === feedback) {
            return html `<wink-toast
        theme="${theme}-theme"
        current-theme="${theme}-theme"
        brand="${brand}"
        is-open
        appearance="${args.appearanceFeedback}"
        text="${args.text}"
        duration="${args.duration}">
      </wink-toast>`;
        }
        return html `<wink-toast
      theme="${theme}-theme"
      current-theme="${theme}-theme"
      brand="${brand}"
      is-open
      appearance="${args.appearance}"
      text="${args.text}"
      href="${args.href}"
      target="${args.target}"
      link-text="${args.linkText}">
    </wink-toast>`;
    },
};
export const Default = {
    args: {
        isOpen: true,
        appearance: TOAST_TYPES.actionable,
        appearanceFeedback: TOAST_TYPES.positive,
        text: toastText,
        href: '#',
        duration: '0',
        linkText: 'Open Link',
    },
};
export const positive = {
    args: {
        isOpen: true,
        appearance: feedback,
        appearanceFeedback: TOAST_TYPES.positive,
        text: toastText,
        href: '#',
        duration: 0,
        linkText: 'Open Link',
    },
};
export const negative = {
    args: {
        isOpen: true,
        appearance: feedback,
        appearanceFeedback: TOAST_TYPES.positive,
        text: toastText,
        href: '#',
        duration: 0,
        linkText: 'Open Link',
    },
};
//# sourceMappingURL=toast.stories.js.map

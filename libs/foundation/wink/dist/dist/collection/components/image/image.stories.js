import { html, nothing } from "lit-html";
import { LOADING_TYPES } from "./models/image.types";
import { BADGES } from "../../models/badges.types";
export default {
    title: 'COMPONENTS/Image',
    component: 'Img',
    parameters: {
        badges: [BADGES.ready],
    },
    argTypes: {
        srcDesktop: {
            description: 'The srcDesktop property specifies the source URL or path of the desktop image to be displayed.',
            type: {
                name: 'string',
                required: true,
            },
        },
        alt: {
            description: 'The alt property provides alternative text for an image, describing its content or function for accessibility purposes within the image component.',
        },
        srcTablet: {
            description: 'The srcTablet property specifies the source URL or path of the image specifically intended for display on tablet devices within the image component.',
        },
        srcMobile: {
            description: 'The srcMobile property specifies the source URL or path of the image specifically intended for display on mobile devices within the image component.',
        },
        loading: {
            control: 'inline-radio',
            options: Object.values(LOADING_TYPES),
            description: 'The loading property determines how the image component loads its content, providing options like "eager" for immediate loading or "lazy" for deferred loading based on user interaction or viewport visibility.',
        },
    },
    args: {
        srcDesktop: '/assets/shared/img/place-holders/testimg-desktop.jpg',
        srcTablet: '/assets/shared/img/place-holders/testimg-tablet.jpg',
        srcMobile: '/assets/shared/img/place-holders/testimg-mobile.jpg',
        alt: 'Please describe picture for screen-readers',
        loading: LOADING_TYPES.lazy,
    },
    render: (args) => html `
    <wink-img
      src-desktop="${args.srcDesktop || nothing}"
      src-tablet="${args.srcTablet || nothing}"
      src-mobile="${args.srcMobile || nothing}}"
      alt="${args.alt || nothing}}"
      loading="${args.loading}">
    </wink-img>
  `,
};
export const Default = {};
export const OnlyDesktop = {
    args: {
        srcTablet: '',
        srcMobile: '',
    },
};
//# sourceMappingURL=image.stories.js.map

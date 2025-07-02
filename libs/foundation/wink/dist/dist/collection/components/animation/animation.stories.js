import { html, nothing } from "lit-html";
import { BADGES } from "../../models";
export default {
    title: 'COMPONENTS/Animation',
    component: 'Animation',
    parameters: {
        badges: [BADGES.inProgress],
    },
    argTypes: {
        src: {
            description: 'The src attribute selects the lottie json file to be displayed.',
            type: {
                name: 'string',
                required: true,
            },
        },
        count: {
            control: {
                type: 'number',
                min: 0,
                max: 100,
                step: 1,
            },
            description: 'The count property specifies the number of times the animation will loop, if this value is 0 the animation will loop indefinitely.',
        },
        controls: {
            control: 'boolean',
            description: 'The controls property specifies if the controls to play and pause the animation should be shown.',
        },
        autoplay: {
            control: 'boolean',
            description: 'The autoplay property specifies if the animation should start automatically, this will always be set to true when the controls are hidden.',
        },
        clickToPlay: {
            control: 'boolean',
            description: 'The clickToPlay property specifies if the animation should be played when clicked.',
        },
    },
    args: {
        src: '/assets/shared/animations/wink-logo.json',
        count: 0,
        controls: true,
        autoplay: true,
        clickToPlay: false,
    },
    render: (args) => html `<wink-animation
      style="width: 40rem; height: 40rem"
      src="${args.src}"
      count="${args.count || nothing}"
      ?controls="${args.controls}"
      ?autoplay="${args.autoplay}"
      ?click-to-play="${args.clickToPlay}">
    </wink-animation>`,
};
export const Default = {};
//# sourceMappingURL=animation.stories.js.map

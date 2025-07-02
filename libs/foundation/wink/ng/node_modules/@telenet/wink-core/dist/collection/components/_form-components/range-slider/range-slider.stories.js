import { html, nothing } from "lit-html";
import { BADGES } from "../../../models";
import { STORY_CATEGORIES } from "../../../models/categories.types";
import { SLIDER_TYPES } from "./models/range-slider.types";
export default {
    title: 'FORM COMPONENTS/Range slider',
    component: 'RangeSlider',
    parameters: {
        badges: [BADGES.ready],
        html: {
            transform: (code) => {
                return code
                    .replace(/(?<=<wink-range-slider[^>]*>).*?(?=<\/wink-range-slider>)/gs, '')
                    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                    .replace(/class="[^"]*"/gi, '')
                    .replace(/brand="[^"]*"/gi, '')
                    .replace(/(<wink-range-slider[^>]*)(?:(?:class|brand)="[^"]*")*([^>]*>)/gi, '$1$2');
            },
        },
    },
    argTypes: {
        sliderId: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The sliderId property assigns a unique identifier to the input field, facilitating accessibility and functionality.',
            type: { name: 'string', required: true },
        },
        label: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The label property specifies the label text displayed alongside the slider, providing context or instructions for the user.',
            type: { name: 'string', required: true },
        },
        helper: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The helper property provides additional assistance or information related to the radio-button in the form of helper text displayed below the label, offering guidance or clarification to the user.',
            type: { name: 'string', required: true },
        },
        minValue: {
            control: {
                type: 'number',
                min: 0,
                max: 10000,
                step: 1,
            },
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'the minValue property specifies the minimum value of the slider.',
        },
        maxValue: {
            control: {
                type: 'number',
                min: 0,
                max: 10000,
                step: 1,
            },
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'the maxValue property specifies the maximum value of the slider.',
        },
        bottomValue: {
            control: {
                type: 'number',
                min: 0,
                max: 10000,
                step: 1,
            },
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'the bottomValue property specifies the lower value of the range slider.',
            if: { arg: 'sliderType', eq: SLIDER_TYPES.range },
        },
        value: {
            control: {
                type: 'number',
                min: 0,
                max: 10000,
                step: 1,
            },
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'the value property specifies the value of the slider or in the case of the range slider, it sets the highest one.',
        },
        step: {
            control: {
                type: 'number',
                min: 1,
                max: 200,
                step: 1,
            },
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'the step property specifies the step size of the slider.',
        },
        showInput: {
            control: 'boolean',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The showInput property, when set to true, will add an input field to the slider to set the value.',
        },
        showValues: {
            control: 'boolean',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The showValues property, when set to true, will add the value of the slider next to them.',
        },
        sliderType: {
            control: 'inline-radio',
            table: { category: STORY_CATEGORIES.cpBasic },
            options: [SLIDER_TYPES.range, SLIDER_TYPES.single],
            description: 'The sliderType property selects between the range slider and the single slider.',
            type: { name: 'string', required: true },
        },
        errorMessage: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The errorMessage property specifies the error message to display when the slider value is invalid.',
        },
    },
    args: {
        sliderType: SLIDER_TYPES.range,
        label: 'Range Slider',
        helper: 'Slider met min en max waardes',
        bottomValue: 30,
        value: 70,
        minValue: 0,
        maxValue: 100,
        step: 1,
        showValues: true,
        showInput: true,
        errorMessage: 'Geef een geldige waarde in',
        sliderId: 'range-slider',
    },
    render: (args) => html ` <style>
        wink-range-slider {
          display: block;
          max-width: 400px;
        }
      </style>
      <wink-range-slider
        slider-type="${args.sliderType}"
        label=${args.label || nothing}
        helper=${args.helper || nothing}
        bottom-value="${args.sliderType === SLIDER_TYPES.range ? args.bottomValue : nothing}"
        value=${args.value}
        ?show-input="${args.showInput}"
        ?show-values="${args.showValues}"
        min-value="${args.minValue}"
        max-value="${args.maxValue}"
        step=${args.step || nothing}
        error-message=${args.errorMessage || nothing}
        slider-id=${args.sliderId}>
      </wink-range-slider>`,
};
export const Default = {};
export const Single = {
    args: {
        sliderType: SLIDER_TYPES.single,
        label: 'Single Slider',
        helper: 'Slider met min en max waardes',
        bottomValue: 30,
        value: 70,
        minValue: 0,
        maxValue: 100,
        step: 1,
        showValues: true,
        showInput: true,
        errorMessage: 'Geef een geldige waarde in',
        sliderId: 'single-slider',
    },
};
//# sourceMappingURL=range-slider.stories.js.map

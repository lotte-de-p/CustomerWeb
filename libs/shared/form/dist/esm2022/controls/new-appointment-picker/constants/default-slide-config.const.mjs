export const DefaultDateSlideConfig = {
    infinite: false,
    initialSlide: 0,
    mobileFirst: true,
    arrows: true,
    nextArrow: '<div class="cards-slider-button arrow arrow--right slick-arrow" aria-disabled="false"></div>',
    prevArrow: '<div class="cards-slider-button arrow arrow--left slick-arrow" aria-disabled="false"></div>',
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToScroll: 6,
                slidesToShow: 6,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToScroll: 3,
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
            },
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zbGlkZS1jb25maWcuY29uc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvbmV3LWFwcG9pbnRtZW50LXBpY2tlci9jb25zdGFudHMvZGVmYXVsdC1zbGlkZS1jb25maWcuY29uc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQXlCO0lBQzFELFFBQVEsRUFBRSxLQUFLO0lBQ2YsWUFBWSxFQUFFLENBQUM7SUFDZixXQUFXLEVBQUUsSUFBSTtJQUNqQixNQUFNLEVBQUUsSUFBSTtJQUNaLFNBQVMsRUFBRSw4RkFBOEY7SUFDekcsU0FBUyxFQUFFLDZGQUE2RjtJQUN4RyxjQUFjLEVBQUUsQ0FBQztJQUNqQixZQUFZLEVBQUUsQ0FBQztJQUNmLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFVBQVUsRUFBRTtRQUNWO1lBQ0UsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFO2dCQUNSLGNBQWMsRUFBRSxDQUFDO2dCQUNqQixZQUFZLEVBQUUsQ0FBQzthQUNoQjtTQUNGO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsR0FBRztZQUNmLFFBQVEsRUFBRTtnQkFDUixjQUFjLEVBQUUsQ0FBQztnQkFDakIsWUFBWSxFQUFFLENBQUM7YUFDaEI7U0FDRjtRQUNEO1lBQ0UsVUFBVSxFQUFFLEdBQUc7WUFDZixRQUFRLEVBQUU7Z0JBQ1IsY0FBYyxFQUFFLENBQUM7Z0JBQ2pCLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbGlkZUNvbmZpZ0ludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdERhdGVTbGlkZUNvbmZpZzogU2xpZGVDb25maWdJbnRlcmZhY2UgPSB7XG4gIGluZmluaXRlOiBmYWxzZSxcbiAgaW5pdGlhbFNsaWRlOiAwLFxuICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwiY2FyZHMtc2xpZGVyLWJ1dHRvbiBhcnJvdyBhcnJvdy0tcmlnaHQgc2xpY2stYXJyb3dcIiBhcmlhLWRpc2FibGVkPVwiZmFsc2VcIj48L2Rpdj4nLFxuICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiY2FyZHMtc2xpZGVyLWJ1dHRvbiBhcnJvdyBhcnJvdy0tbGVmdCBzbGljay1hcnJvd1wiIGFyaWEtZGlzYWJsZWQ9XCJmYWxzZVwiPjwvZGl2PicsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBzbGlkZXNUb1Nob3c6IDEsXG4gIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gIHJlc3BvbnNpdmU6IFtcbiAgICB7XG4gICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDYsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuIl19
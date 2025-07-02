import { Stack } from "./stack";
describe('Stack', () => {
    let comp;
    const spacing3XS = 'spacing-3xs';
    beforeEach(() => {
        comp = new Stack();
    });
    describe('col', () => {
        it('should get the right column class', () => {
            comp.col = { default: 12 };
            comp['getClassesByPostfix']('col', 'col');
            expect(comp['getStackClasses']()).toMatchObject({ ['col-12']: true });
        });
        it('should get the right breakpoints column classes', () => {
            comp.col = { default: 12, sm: 7, md: 5 };
            comp['getClassesByPostfix']('col', 'col');
            expect(comp['getStackClasses']()).toMatchObject({ ['col-7-sm']: true, ['col-5-md']: true });
        });
    });
    describe('direction', () => {
        it('should get the right directions class', () => {
            comp.direction = { default: 'column' };
            comp['getClassesByPostfix']('flex-direction', 'direction');
            expect(comp['getStackClasses']()).toMatchObject({ ['flex-direction-column']: true });
        });
        it('should get the right breakpoints directions classes', () => {
            comp.direction = { default: 'column', sm: 'row', md: 'column-reverse' };
            comp['getClassesByPostfix']('flex-direction', 'direction');
            expect(comp['getStackClasses']()).toMatchObject({
                ['flex-direction-row-sm']: true,
                ['flex-direction-column-reverse-md']: true,
            });
        });
    });
    describe('gap', () => {
        it('should get the right gaps class', () => {
            comp.gap = { default: spacing3XS };
            comp['getClassesByPostfix']('gap', 'gap');
            expect(comp['getStackClasses']()).toMatchObject({ ['gap-spacing-3xs']: true, ['col-12']: true });
        });
        it('should get the right breakpoints gaps classes', () => {
            comp.gap = { default: spacing3XS, sm: spacing3XS, md: 'spacing-none' };
            comp['getClassesByPostfix']('gap-size', 'gap');
            expect(comp['getStackClasses']()).toMatchObject({ ['gap-spacing-3xs-sm']: true, ['gap-spacing-none-md']: true });
        });
    });
    describe('justifyContent', () => {
        it('should get the right justify content class', () => {
            comp.justifyContent = { default: 'center' };
            comp['getClassesByPostfix']('justify-content', 'justifyContent');
            expect(comp['getStackClasses']()).toMatchObject({ ['justify-content-center']: true });
        });
        it('should get the right breakpoints justify content classes', () => {
            comp.justifyContent = { default: 'center', sm: 'space-around', md: 'unset' };
            comp['getClassesByPostfix']('justify-content', 'justifyContent');
            expect(comp['getStackClasses']()).toMatchObject({
                ['justify-content-space-around-sm']: true,
                ['justify-content-unset-md']: true,
            });
        });
    });
    describe('alignItems', () => {
        it('should get the right align-items class', () => {
            comp.alignItems = { default: 'center' };
            comp['getClassesByPostfix']('align-items', 'alignItems');
            expect(comp['getStackClasses']()).toMatchObject({ ['align-items-center']: true });
        });
        it('should get the right breakpoints align-items classes', () => {
            comp.alignItems = { default: 'center', sm: 'flex-start', md: 'flex-end' };
            comp['getClassesByPostfix']('align-items', 'alignItems');
            expect(comp['getStackClasses']()).toMatchObject({
                ['align-items-flex-start-sm']: true,
                ['align-items-flex-end-md']: true,
            });
        });
    });
    describe('wrap', () => {
        it('should get the right wrap class', () => {
            comp.wrap = { default: 'wrap' };
            comp['getClassesByPostfix']('flex-wrap', 'wrap');
            expect(comp['getStackClasses']()).toMatchObject({ ['flex-wrap-wrap']: true });
        });
        it('should get the right breakpoints wrap classes', () => {
            comp.wrap = { default: 'wrap', sm: 'nowrap', md: 'initial' };
            comp['getClassesByPostfix']('flex-wrap', 'wrap');
            expect(comp['getStackClasses']()).toMatchObject({
                ['flex-wrap-nowrap-sm']: true,
                ['flex-wrap-initial-md']: true,
            });
        });
    });
});
//# sourceMappingURL=stack.spec.js.map

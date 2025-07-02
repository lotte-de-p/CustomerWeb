import { Icon } from "./icon";
describe('wink-icon', () => {
    let comp;
    beforeEach(() => {
        comp = new Icon();
    });
    it('Icon should do something', () => {
        expect(comp).not.toBe(true);
    });
    describe('hasBackdrop', () => {
        it('should assign false value to hasBackdrop when appearance is default', () => {
            comp.appearance = 'default';
            comp.componentWillRender();
            expect(comp.hasBackdrop).toBe(false);
        });
        it('should assign true value to hasBackdrop when appearance is primary', () => {
            comp.appearance = 'primary';
            comp.componentWillRender();
            expect(comp.hasBackdrop).toBe(true);
        });
        it('should assign true value to hasBackdrop when appearance is secondary', () => {
            comp.appearance = 'secondary';
            comp.componentWillRender();
            expect(comp.hasBackdrop).toBe(true);
        });
        it('should assign true value to hasBackdrop when appearance is transparent', () => {
            comp.appearance = 'transparent';
            comp.componentWillRender();
            expect(comp.hasBackdrop).toBe(true);
        });
    });
});
//# sourceMappingURL=icon.spec.js.map

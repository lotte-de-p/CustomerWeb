import { Title } from "../../title/title";
import { Paragraph } from "../../paragraph/paragraph";
describe('pattern-title-text', () => {
    it('Should create an instances of Title and Paragraph components', () => {
        const compTitle = new Title();
        const compText = new Paragraph();
        expect(compTitle).toBeInstanceOf(Title);
        expect(compText).toBeInstanceOf(Paragraph);
    });
});
//# sourceMappingURL=title-text.spec.js.map

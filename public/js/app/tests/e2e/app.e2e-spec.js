import { MEAN2SeedPage } from './app.po';
describe('MEAN2-seed App', function () {
    var page;
    beforeEach(function () {
        page = new MEAN2SeedPage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map
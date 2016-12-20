import { browser, element, by } from 'protractor';
export var MEAN2SeedPage = (function () {
    function MEAN2SeedPage() {
    }
    MEAN2SeedPage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    MEAN2SeedPage.prototype.getParagraphText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return MEAN2SeedPage;
}());
//# sourceMappingURL=app.po.js.map
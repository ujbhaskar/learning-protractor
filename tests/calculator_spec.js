describe('Demo calculator tests', () => {

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
  
    });
    function sleep() {
        browser.sleep(500);
    }
    it('addition test', () => {
        element(by.model('first')).sendKeys(100);
        element(by.model('operator')).click();
        element(by.css('[value="ADDITION"')).click();
        element(by.model('second')).sendKeys(567);
        var button = element(by.id('gobutton'));
        button.click();

        var result = element(by.tagName('h2'));
        expect(result.getText()).toBe('667');
    });

    it('subtraction test', () => {
        element(by.model('first')).sendKeys(456);
        element(by.model('operator')).click();
        element(by.css('[value="SUBTRACTION"')).click();
        element(by.model('second')).sendKeys(45);
        var button = element(by.id('gobutton'));
        button.click();

        var result = element(by.tagName('h2'));
        expect(result.getText()).toBe('411');
    });

    it('divide test', () => {
        element(by.model('first')).sendKeys(45);
        element(by.model('operator')).click();
        element(by.css('[value="DIVISION"')).click();
        element(by.model('second')).sendKeys(5);
        var button = element(by.id('gobutton'));
        button.click();

        var result = element(by.tagName('h2'));
        expect(result.getText()).toBe('9');
    });

    it('multiplication test', () => {
        element(by.model('first')).sendKeys(4);
        element(by.model('operator')).click();
        element(by.css('[value="MULTIPLICATION"')).click();
        element(by.model('second')).sendKeys(5);
        var button = element(by.id('gobutton'));
        button.click();

        var result = element(by.tagName('h2'));
        expect(result.getText()).toBe('20');
    });
})

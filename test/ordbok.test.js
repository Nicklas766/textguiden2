const { Builder, By } = require('selenium-webdriver');

describe('sees if its possible to search for words and get redirected result', () => {

    let driver;
    jest.setTimeout(30000); // avoid 5000ms timeout

    beforeEach(async () => {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('http:/localhost:3000/ord');
        await driver.manage().setTimeouts({ implicit: 5000 }); // ensure it waits 5 seconds for an element to load
    })

    afterEach(() => {
        driver.quit();
    })

    it('should navigate to /ord/hej with 200 title', async () => {
        await driver.findElement(By.css('input')).sendKeys('hej');

        await driver.findElement(By.className('MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-text MuiButton-fullWidth')).click();

        await driver.findElement(By.css('ul')); // this is unique to the /ord/* page

        const title = await driver.getTitle();

        return expect(title).toBe('Hur används ordet "hej"?');
    })

    it('should navigate to /ord/finnsej with 404 title', async () => {
        await driver.findElement(By.css('input')).sendKeys('finnsej');

        await driver.findElement(By.className('MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-text MuiButton-fullWidth')).click();

        await driver.findElement(By.css('ul')); // this is unique to the /ord/* page

        const title = await driver.getTitle();

        return expect(title).toBe('Kunde inte hitta "finnsej"!');
    })
})

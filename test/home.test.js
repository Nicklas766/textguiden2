const { Builder, By } = require('selenium-webdriver');

describe('sees if its possible to navigate to other pages', () => {

    let driver;
    jest.setTimeout(30000); // avoid 5000ms timeout

    const getTitleAfterClickingLink = async (linkText, uniqueElement, byFunc = By.css) => {
        await driver.findElement(By.linkText(linkText)).click();

        await driver.findElement(byFunc(uniqueElement)); // unique element for that page

        return driver.getTitle();
    }

    beforeEach(async () => {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('http:/localhost:3000');
        await driver.manage().setTimeouts({ implicit: 5000 }); // ensure it waits 5 seconds for an element to load
    })

    afterEach(() => {
        driver.quit();
    })

    it('should navigate to /spel', async () => {
        const title = await getTitleAfterClickingLink('Utmana dig själv', 'span');

        expect(title).toBe('Öva på svenska');
    })

    it('should navigate to /ord', async () => {
        const title = await getTitleAfterClickingLink('Titta i vår ordbok', 'input');

        expect(title).toBe('TextGuidens ordbok');
    })

    it('should navigate to /hur-forkortas', async () => {
        const title = await getTitleAfterClickingLink('Förkortningar', 'ul');

        expect(title).toBe('Svenska förkortningar');
    })

    it('should navigate to /om-oss', async () => {
        const title = await getTitleAfterClickingLink('Om oss', 'Klicka här för att läsa om vår datahantering', By.linkText);

        expect(title).toBe('TextGuiden - Om oss');
    })
})

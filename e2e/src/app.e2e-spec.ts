import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  const loginName = 'user';
  const loginPassword = 'user';

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login button', () => {
    page.navigateToURL('/login');
    expect(page.getLoginButton().getText()).toContain('LOGIN');
  });

  it('it should login into the app', () => {
    page.navigateToURL('/login');

    const loginField = page.getLoginField();
    const passwordField = page.getPasswordField();
    const loginButton = page.getLoginButton();

    browser.actions().click(loginField).sendKeys(loginName).perform();
    browser.actions().click(passwordField).sendKeys(loginName).perform();
    browser.driver.sleep(2000);
    loginButton.click();
    browser.sleep(2000);
    expect(page.getHOneMarkup().getText()).toContain('Welcome to home page');
    browser.driver.sleep(2000);
  });
});

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToURL(url) {
    return browser.get(url);
  }

  getLoginButton() {
    return element(by.deepCss('app-root ion-button'));
  }

  getLoginField() {
    return element(by.name('username'));
  }

  getPasswordField() {
    return element(by.name('password'));
  }

  getAppHeaderTitle() {
    return element(by.deepCss('app-root ion-toolbar ion-title'));
  }

  getHOneMarkup() {
    return element(by.deepCss('app-root h1'));
  }
}

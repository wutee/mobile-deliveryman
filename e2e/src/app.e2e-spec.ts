import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login button', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('LOGIN');
  });
});

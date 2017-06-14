import { DonotforgetPage } from './app.po';

describe('donotforget App', () => {
  let page: DonotforgetPage;

  beforeEach(() => {
    page = new DonotforgetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

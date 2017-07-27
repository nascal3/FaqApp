import { FaqApPage } from './app.po';

describe('faq-ap App', () => {
  let page: FaqApPage;

  beforeEach(() => {
    page = new FaqApPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

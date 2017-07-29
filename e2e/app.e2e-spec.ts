import { BankingProjectPage } from './app.po';

describe('banking-project App', () => {
  let page: BankingProjectPage;

  beforeEach(() => {
    page = new BankingProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

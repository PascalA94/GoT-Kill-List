import { TheListAppPage } from './app.po';

describe('the-list-app App', () => {
  let page: TheListAppPage;

  beforeEach(() => {
    page = new TheListAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { TrumbowygAngularCliExamplePage } from './app.po';

describe('trumbowyg-angular-cli-example App', () => {
  let page: TrumbowygAngularCliExamplePage;

  beforeEach(() => {
    page = new TrumbowygAngularCliExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

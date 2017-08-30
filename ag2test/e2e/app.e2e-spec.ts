import { Ag2testPage } from './app.po';

describe('ag2test App', () => {
  let page: Ag2testPage;

  beforeEach(() => {
    page = new Ag2testPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

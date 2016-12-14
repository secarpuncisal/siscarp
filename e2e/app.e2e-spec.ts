import { CpwebPage } from './app.po';

describe('cpweb App', function() {
  let page: CpwebPage;

  beforeEach(() => {
    page = new CpwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

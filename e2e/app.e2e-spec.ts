import { Dipterv3Page } from './app.po';

describe('dipterv3 App', function() {
  let page: Dipterv3Page;

  beforeEach(() => {
    page = new Dipterv3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

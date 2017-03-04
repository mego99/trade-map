import { TradeMapPage } from './app.po';

describe('trade-map App', function() {
  let page: TradeMapPage;

  beforeEach(() => {
    page = new TradeMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

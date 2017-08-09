import { VeloAppPage } from './app.po';

describe('velo-app App', () => {
  let page: VeloAppPage;

  beforeEach(() => {
    page = new VeloAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

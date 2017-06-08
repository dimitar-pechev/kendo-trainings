import { KendoAngularTestPage } from './app.po';

describe('kendo-angular-test App', () => {
  let page: KendoAngularTestPage;

  beforeEach(() => {
    page = new KendoAngularTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

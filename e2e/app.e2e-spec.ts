import { TextToLearnAppPage } from './app.po';

describe('text-to-learn-app App', () => {
  let page: TextToLearnAppPage;

  beforeEach(() => {
    page = new TextToLearnAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

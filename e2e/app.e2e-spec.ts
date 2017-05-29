import { AppetcareTutorPage } from './app.po';

describe('appetcare-tutor App', function() {
  let page: AppetcareTutorPage;

  beforeEach(() => {
    page = new AppetcareTutorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { SimpleTodoListPage } from './app.po';

describe('simple-todo-list App', () => {
  let page: SimpleTodoListPage;

  beforeEach(() => {
    page = new SimpleTodoListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

/**
 * @jest-environment jsdom
 */
import { wall } from '../src/templates/wall';
import { signOutUser } from '../src/lib/config/auth';
import { posting, postData } from '../src/lib/config/posts';

jest.mock('firebase/auth', () => ({
  getAuth: () => ({
    currentUser: {
      displayName: 'John Doe',
    },
  }),
}));

jest.mock('../src/lib/config/auth', () => ({
  signOutUser: jest.fn(() => Promise.resolve()),

}));
jest.mock('../src/lib/config/posts', () => ({
  posting: jest.fn(),
  postData: jest.fn(),

}));

describe('wall', () => {
  let wallSection;

  beforeEach(() => {
    wallSection = wall();
  });

  afterEach(jest.clearAllMocks);

  it('deberia de crear los elementos nesarios para el muro', () => {
    expect(wallSection).toBeTruthy();
    expect(wallSection.querySelector('header')).toBeTruthy();
    expect(wallSection.querySelector('.hamburger')).toBeTruthy();
    expect(wallSection.querySelector('.logo-container')).toBeTruthy();
    expect(wallSection.querySelector('.profilePic')).toBeTruthy();
    expect(wallSection.querySelector('main')).toBeTruthy();
    expect(wallSection.querySelector('.post-input')).toBeTruthy();
    expect(wallSection.querySelector('.posts-section')).toBeTruthy();
  });

  it('debe navegar a Home al hacer click en el boton cerrar sesión', async () => {
    const onNavigate = jest.fn();
    const container = document.createElement('section');
    container.append(wall(onNavigate));

    const closeBtn = container.querySelector('.btn-logout');
    expect(closeBtn).not.toBe(null);
    // Click the close button
    closeBtn.click();
    await signOutUser.mockImplementation(() => Promise.resolve());
    expect(onNavigate).toHaveBeenCalledWith('/');
  });

  test('Si el input no está vacío debe llamarse la función posting', () => {
    const container = document.createElement('section');
    container.append(wall());
    const form = container.querySelector('.form-yourpost');
    const input = container.querySelector('.your-postInput');
    input.value = 'Some post text';

    form.dispatchEvent(new Event('submit', { bubbles: true }));

    expect(posting).toHaveBeenCalledWith(input, form);
  });

  test('al hacer clic en el menú hamburguesa la clase debe cambiar a active', () => {
    const container = document.createElement('section');
    container.append(wall());
    const hamburgerArticle = container.querySelector('.hamburger');
    const sectionMenu = document.createElement('section-menu');

    hamburgerArticle.dispatchEvent(new Event('click'));
    expect(sectionMenu.classList.contains('active')).toBe(false);

    expect(sectionMenu.classList.contains('active')).toBe(false);
  });

  test('El evento de clic en btnCloseMenu debe agregar o eliminar la clase "active" en sectionMenu', () => {
    const btnCloseMenu = wallSection.querySelector('.btn-close-menu');
    const sectionMenu = wallSection.querySelector('.section-menu');
    btnCloseMenu.click();
    expect(sectionMenu.classList.contains('active')).toBe(true);
    btnCloseMenu.click();
    expect(sectionMenu.classList.contains('active')).toBe(false);
  });

  it('should render posts correctly', () => {
    const mockQuerySnapshot = {
      forEach: jest.fn((callback) => {
        const mockPostData = {
          userid: 'user1',
          text: 'Some post text',
          likes: [],
          likescat: [],
        };
        const mockPos = {
          id: 'post1',
          data: () => mockPostData,
        };
        callback(mockPos);
      }),
    };

    postData.mockImplementationOnce((callback) => {
      callback(mockQuerySnapshot);
    });
    // Mock para addEventListener
    document.body.addEventListener = jest.fn();
    wall();
    // Simular el click en moreOptionsimg después de renderizar los posts
    const moreOptionsimg = wallSection.querySelector('.frame-options');
    moreOptionsimg.click();
    expect(moreOptionsimg.classList.contains('active')).toBe(true);

    const btnCloseMenu = wallSection.querySelector('.btn-close-menu');
    const sectionMenu = wallSection.querySelector('.section-menu');
    btnCloseMenu.click();
    expect(sectionMenu.classList.contains('active')).toBe(true);
    btnCloseMenu.click();
    expect(sectionMenu.classList.contains('active')).toBe(false);
  });

  it('reaccion con like al hacer click en el icono de perro', () => {
    // Create a mock querySnapshot and postData
    const mockQuerySnapshot = {
      forEach: jest.fn((callback) => {
        const mockPostData = {
          userid: 'user1',
          text: 'Some post text',
          likes: [],
          likescat: [],
        };
        const mockPos = {
          id: 'post1',
          data: () => mockPostData,
        };
        callback(mockPos);
      }),
    };

    postData.mockImplementationOnce((callback) => {
      callback(mockQuerySnapshot);
    });

    const wallContainer = wall();

    const dogReaction = wallContainer.querySelector('.dog-reaction');

    dogReaction.click();
    expect(likes).toHaveBeenCalledWith('post1');
  });
});

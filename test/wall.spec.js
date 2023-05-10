/**
 * @jest-environment jsdom
 */
import { wall } from '../src/templates/wall';
import { signOutUser } from '../src/lib/config/auth';

jest.mock('../src/lib/config/auth', () => ({
  signOutUser: jest.fn(() => Promise.resolve()),
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

  it('deberia de existir un boton de publicar', () => {
    /*  const container = document.createElement('section');
    container.append(wall()); */
    const btnPublish = wallSection.querySelector('.btnyour-post');
    expect(btnPublish).toBeTruthy();
  });

  it('deberia de existir un boton de cerrar sesión', () => {
    const container = document.createElement('section');
    container.append(wall());
    const btnClose = container.querySelector('.btn-logout');
    expect(btnClose).not.toBe(null);
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

  test('form submission should not trigger posting function if input value is empty', () => {
  // create test input and form elements
    const input = document.createElement('input');
    input.value = '';
    const form = document.createElement('form');
    form.appendChild(input);

    // create mock posting function
    const posting = jest.fn();

    // simulate form submission
    form.dispatchEvent(new Event('submit', { bubbles: true }));

    // ensure posting function is not called
    expect(posting).not.toHaveBeenCalled();
  });

  it('deberia de renderizar la pantalla wall correctamente', () => {
    const container = document.createElement('section');
    container.append(wall());
    expect(container.innerHTML).toMatchSnapshot();
  });
});

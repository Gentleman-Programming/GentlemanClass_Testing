import { screen, render } from '@testing-library/react';
import { LoginForm } from '../pages';

jest.mock('../components/index.js', () => ({
  __esModule: true,
  default: () => <div>Mocked Username Field</div>,
}));

jest.mock('../components', () => ({
  __esModule: true,
  default: () => <div>Mocked Username Field</div>,
}));

jest.mock('../components', () => ({
  __esModule: true,
  default: () => <div>Mocked Button</div>,
}));

describe('mock children components', () => {
  test('should mock the components', () => {
    render(<LoginForm />);

    screen.debug();
  });
});

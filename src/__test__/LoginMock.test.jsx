import { screen, render } from '@testing-library/react';
import { LoginForm } from '../pages';

jest.mock('../components/PasswordField.jsx', () => ({
  __esModule: true,
  PasswordField: () => <div>Mocked Password Field</div>
}));

jest.mock('../components/UsernameField.jsx', () => ({
  __esModule: true,
  UsernameField: () => <div>Mocked Username Field</div>
}));

jest.mock('../components/Button.jsx', () => ({
  __esModule: true,
  Button: () => <div>Mocked Button</div>
}));

describe('LoginForm', () => {
  test('should mock the components', () => {
    render(<LoginForm />);
    screen.debug();
  });
});

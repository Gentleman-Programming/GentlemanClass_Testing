import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { LoginForm } from '../components';

describe('LoginForm', () => {
  test('should exist two inputs in the view', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/nombre de usuario/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
  });

  test('should exist the submit button', () => {
    render(<LoginForm />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});

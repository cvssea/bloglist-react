import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';

jest.mock('./services/blogs');

describe('<APP />', () => {
  let component;

  beforeAll(() => {
    component = render(<App />);
  });

  test('application displays login form when no user logged in', async () => {
    component.rerender(<App />);
    await waitForElement(
      () => component.getByText('Login'),
    );

    expect(component.container).toHaveTextContent('Login');
  });
  test('blogs are rendered when user is logged in', async () => {
    const user = {
      username: 'admin',
      token: '12345',
      name: 'Tester',
    };
    localStorage.setItem('bloglistUser', JSON.stringify(user));
    component = render(<App />);
    component.rerender(<App />);

    await waitForElement(
      () => component.container.querySelectorAll('.blog'),
    );

    const blogs = component.container.querySelectorAll('.blog');
    expect(blogs.length).toBe(1);
  });
});

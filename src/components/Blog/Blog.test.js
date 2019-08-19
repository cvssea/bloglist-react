import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Blog from './Blog';

describe('<Blog />', () => {
  const blog = {
    id: '0',
    title: 'Testing a blog',
    author: 'admin',
    url: 'localhost',
    likes: '10',
    user: { username: 'admin' },
  };

  let component;

  beforeEach(() => {
    component = render(<Blog {...blog} />);
  });

  test('renders content', () => {
    const title = component.container.querySelector('h4');
    expect(title).toHaveTextContent('Testing a blog');
  });

  test('initially renders only title', () => {
    const showButton = component.getByText('Show');
    expect(showButton).toBeDefined();
  });

  test('clicking on show reveals all blog info', () => {
    const showButton = component.getByText('Show');
    fireEvent.click(showButton);

    const info = component.container.querySelector('.show-info');
    expect(info).toBeDefined();
  });
});

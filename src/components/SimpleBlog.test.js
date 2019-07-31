import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SimpleBlog from './SimpleBlog';

describe('<SimpleBlog />', () => {
  const blog = {
    title: 'Testing this blog',
    author: 'admin',
    likes: '100',
  };

  test('renders data', () => {
    const component = render(<SimpleBlog blog={blog} />);
    expect(component.container).toHaveTextContent('Testing this blog');
    expect(component.container).toHaveTextContent('admin');
    expect(component.container).toHaveTextContent('100');
  });

  test('onClick handler is called correctly', () => {
    const mockHandler = jest.fn();
    const component = render(<SimpleBlog blog={blog} onClick={mockHandler} />);

    const likeButton = component.container.querySelector('button');
    for (let i = 0; i < 2; i += 1) { fireEvent.click(likeButton); }

    expect(mockHandler.mock.calls.length).toBe(2);
  });
});

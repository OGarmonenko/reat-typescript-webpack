import React from 'react';
import Modal from './Modal';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const props = {
  header: <p role="header">Header</p>,
  content: <p role="content">Content</p>,
  footer: <button>OK</button>,
};

describe('Test Modal', () => {
  test('renders Modal with jsx.elements', () => {
    render(<Modal {...props} />);
    expect(screen.getByRole('header')).toBeInTheDocument();
    expect(screen.getByRole('content')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

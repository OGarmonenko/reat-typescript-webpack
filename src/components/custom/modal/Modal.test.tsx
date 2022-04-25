import React from 'react';
import Modal from './Modal';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Modal_Props } from '@interfaces/interfaceModalProps';

const props: Modal_Props = {
  header: <p role="header">Header</p>,
  content: <p role="content">Content</p>,
  footer: <button>OK</button>,
};

describe('Test Modal', () => {
  test('renders Modal', () => {
    render(<Modal {...props} />);
    expect(screen.getByRole('header')).toBeInTheDocument();
    expect(screen.getByRole('content')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

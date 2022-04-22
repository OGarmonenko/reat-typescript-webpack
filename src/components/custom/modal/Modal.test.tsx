import React from 'react';
import Modal from './Modal';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Modal_Props } from '@interfaces/interfaceModalProps';

describe('Test Modal', () => {
  test('renders Modal', () => {
    const props: Modal_Props = {
      header: <p role="header">Header</p>,
      content: <p role="content">Content</p>,
      footer: <button>OK</button>,
    };
    render(<Modal {...props} />);
    const divHeader = screen.getByRole('header');
    expect(divHeader).toBeInTheDocument();
    const divContent = screen.getByRole('content');
    expect(divContent).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
/*describe ('Header', () => {
    test('Validation data', () => {
        render(<Header />)
        expect(validateData('R')).toBe(true);
    });
    test('Validation data', () => {
        expect(validateData('r')).toBe(true);
    });
    test('Validation data', () => {
        expect(validateData(0)).toBe(true);
    });
    test('Validation data', () => {
        expect(validateData(12)).toBe(true);
    });
    test('Validation data', () => {
        expect(validateData('Я')).toBe(false);
    });
    test('Validation data', () => {
        expect(validateData('я')).toBe(false);
    });
});*/

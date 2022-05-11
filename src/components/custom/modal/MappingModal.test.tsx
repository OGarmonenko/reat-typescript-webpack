import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TypeModal } from '@interfaces/interfaceModalProps';
import MappingModal from '@components/custom/modal/MappingModal';

const mockOnClose = jest.fn();
const mockOnCancel = jest.fn();

const mockConfigModal = {
  type: TypeModal.ERROR,
  visible: true,
  data: {
    message: 'Error 500',
  },
};

const props = {
  onClose: mockOnClose,
  onCancel: mockOnCancel,
  configModal: mockConfigModal,
};

describe('Test MappingModal', () => {
  test('should be opened modal, if visible = true', () => {
    render(<MappingModal {...props} />);
    expect(screen.getByTestId('data-mappingModal')).toBeInTheDocument();
  });

  test('should be closed modal, if visible = false', () => {
    props.configModal.visible = false;
    render(<MappingModal {...props} />);
    expect(screen.queryByTestId('data-mappingModal')).not.toBeInTheDocument();
  });

  test('should be call to mockOnClose, if clicked on button "OK"', () => {
    props.configModal.visible = true;
    render(<MappingModal {...props} />);
    const buttonElement = screen.getByText('OK');
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(mockOnClose).toHaveBeenCalled();
  });

  describe('testing TypeModal.ERROR', () => {
    test('not should be renders button "Cancel"', () => {
      render(<MappingModal {...props} />);
      expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
    });
    test('header should be red color', () => {
      render(<MappingModal {...props} />);
      expect(screen.getByTestId('data-header')).toHaveStyle({ background: '#d1001f' });
    });
  });
  describe('testing TypeModal.Warning', () => {
    test('should be renders button "Cancel"', () => {
      props.configModal.type = TypeModal.WARNING;
      render(<MappingModal {...props} />);
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
    test('header should be yellow color', () => {
      props.configModal.type = TypeModal.WARNING;
      render(<MappingModal {...props} />);
      expect(screen.getByTestId('data-header')).toHaveStyle({ background: '#ffd700' });
    });
    test('should be call to mockOnCancel, if clicked on button "Cancel"', () => {
      props.configModal.type = TypeModal.WARNING;
      render(<MappingModal {...props} />);
      const buttonElement = screen.getByText('Cancel');
      expect(buttonElement).toBeInTheDocument();
      fireEvent.click(buttonElement);
      expect(mockOnCancel).toHaveBeenCalled();
    });
  });
  describe('testing TypeModal.Info', () => {
    test('not should be renders button "Cancel"', () => {
      props.configModal.type = TypeModal.INFO;
      render(<MappingModal {...props} />);
      expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
    });
  });
});

import React from 'react';
import Navbar from '@components/common/navbar/Navbar';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('TEST', () => {
  test('renders Navbar component', async () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    //   test ('Render Navbar', () => {
    //      render(<Navbar />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    //   await userEvent.click(button);
    // expect(button).toBeNull();
    //  screen.debug();
    //   });
  });

  test('test click event', () => {
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(button).toBeNull();
    screen.debug();
  });
});

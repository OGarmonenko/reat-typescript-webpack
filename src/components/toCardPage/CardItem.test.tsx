import React from 'react';
import CardItem from '@components/toCardPage/CardItem';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Record_Props } from '@interfaces/interfaceRecordProps';

interface CardItem_Props {
  selectedRecord: Record_Props | null;
}

const props: CardItem_Props = {
  selectedRecord: { id: 1, item: 'test1', date: 1649248316946 },
};

describe('Test CardItem', () => {
  test('test renders card', () => {
    render(<CardItem {...props} />);
    expect(screen.getByText('test1')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('06/04/2022 - 3:31:56')).toBeInTheDocument();
  });
});

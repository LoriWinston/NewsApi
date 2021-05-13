import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsContainer from './NewsContainer';

describe('NewsContainer Container', () => {
  it('displays a list of news from today', async () => {
    render(<NewsContainer />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'news' });
    expect(ul).toMatchSnapshot();

  });
});

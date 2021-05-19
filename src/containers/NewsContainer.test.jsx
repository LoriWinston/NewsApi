import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NewsContainer from './NewsContainer';
import userEvent from '@testing-library/user-event';
require('dotenv').config();

describe('NewsContainer Container', () => {
  it('displays a list of news from today', async () => {
    render(<NewsContainer />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'news' });
    expect(ul).not.toBeEmptyDOMElement();

    const input = await screen.findByLabelText('Search News');
        userEvent.type(input, 'apple');
    
    const submitButton = await screen.findByRole('button', { name: 'find-news' })
    userEvent.click(submitButton);

    return waitFor(() => {
        const news = screen.getAllByText('apple', { exact: false });
        expect(news).toHaveLength(34);
      });
  });
});

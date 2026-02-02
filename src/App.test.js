// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MantLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MantLink/i);
    expect(titleElement).toBeInTheDocument();
});

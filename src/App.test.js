// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StackGrid title', () => {
    render(<App />);
    const titleElement = screen.getByText(/StackGrid/i);
    expect(titleElement).toBeInTheDocument();
});

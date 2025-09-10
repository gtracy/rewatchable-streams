import React from 'react';
import { render, screen } from '@testing-library/react';
import StreamingOptions from './StreamingOptions';

describe('StreamingOptions Component', () => {
  const mockOptions = [
    { service: 'Netflix', link: 'https://netflix.com/movie' },
    { service: 'Hulu', link: 'https://hulu.com/movie' },
  ];

  test('renders streaming options correctly', () => {
    render(<StreamingOptions options={mockOptions} />);

    expect(screen.getByText(/Streaming Options:/i)).toBeInTheDocument();
    expect(screen.getByText('Netflix:')).toBeInTheDocument();
    expect(screen.getByText('https://netflix.com/movie')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /netflix.com/i })).toHaveAttribute('href', 'https://netflix.com/movie');
    expect(screen.getByText('Hulu:')).toBeInTheDocument();
    expect(screen.getByText('https://hulu.com/movie')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /hulu.com/i })).toHaveAttribute('href', 'https://hulu.com/movie');
  });

  test('renders "no options" message when options are empty', () => {
    render(<StreamingOptions options={[]} />);
    expect(screen.getByText(/No streaming options available/i)).toBeInTheDocument();
  });

  test('renders "no options" message when options prop is undefined', () => {
    render(<StreamingOptions />);
    expect(screen.getByText(/No streaming options available/i)).toBeInTheDocument();
  });

  test('links open in a new tab', () => {
    render(<StreamingOptions options={mockOptions} />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});

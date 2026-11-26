import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the main heading and subtitle', () => {
    render(<Header />);

    const heading = screen.getByRole('heading', { level: 1, name: /watch that pod/i });
    expect(heading).toBeInTheDocument();

    expect(
      screen.getByText(/Discover your favorite and forgotten The Rewatchables episodes/i)
    ).toBeInTheDocument();
  });

  it('renders inside a banner header landmark', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toHaveClass('header');
  });
});

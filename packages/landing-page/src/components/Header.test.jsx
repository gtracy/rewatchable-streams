import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the main heading and subtitle with The Rewatchables and streaming guide copy', () => {
    render(<Header />);

    const heading = screen.getByRole('heading', { level: 1, name: /watch that pod/i });
    expect(heading).toBeInTheDocument();

    const subtitle = screen.getByText(
      /Discover your favorite and forgotten The Rewatchables episodes/i
    );
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent(/streaming guide/i);
    expect(screen.queryByText(/episodes indexed/i)).not.toBeInTheDocument();
  });

  it('renders freshness metadata when totalPodcasts and generatedAt are provided', () => {
    render(<Header totalPodcasts={427} generatedAt="2026-11-23T15:30:00Z" />);

    expect(screen.getByText('427 episodes indexed · Updated Nov 23, 2026')).toBeInTheDocument();
  });

  it('renders singular episode count and ignores invalid generatedAt', () => {
    render(<Header totalPodcasts={1} generatedAt="not-a-date" />);

    expect(screen.getByText('1 episode indexed')).toBeInTheDocument();
  });

  it('renders inside a banner header landmark', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toHaveClass('header');
  });
});

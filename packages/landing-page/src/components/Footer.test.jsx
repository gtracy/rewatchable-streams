import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from './Footer';

describe('Footer', () => {
  it('renders streaming service hub navigation links with canonical paths', () => {
    render(<Footer />);

    const nav = screen.getByRole('navigation', { name: 'Browse by streaming service' });
    const expectedHubs = [
      ['Free', '/streaming/free/'],
      ['Netflix', '/streaming/netflix/'],
      ['Max', '/streaming/max/'],
      ['Paramount+', '/streaming/paramount-plus/'],
      ['Prime Video', '/streaming/prime-video/'],
      ['Hulu', '/streaming/hulu/'],
      ['Apple TV+', '/streaming/apple-tv-plus/'],
      ['Peacock', '/streaming/peacock/'],
      ['Pluto TV', '/streaming/pluto-tv/'],
      ['Tubi', '/streaming/tubi/'],
    ];

    expectedHubs.forEach(([label, href]) => {
      const link = within(nav).getByRole('link', { name: label });
      expect(link).toHaveAttribute('href', href);
    });
  });

  it('renders attribution, coffee, feedback, and privacy links', () => {
    render(<Footer />);

    const ringerLink = screen.getByRole('link', { name: /The Ringer/i });
    expect(ringerLink).toHaveAttribute(
      'href',
      'https://www.theringer.com/podcasts/the-rewatchables'
    );
    expect(ringerLink).toHaveAttribute('target', '_blank');
    expect(ringerLink).toHaveAttribute('rel', 'noopener noreferrer');

    const coffeeLink = screen.getByRole('link', { name: /Buy me a coffee/i });
    expect(coffeeLink).toHaveAttribute('href', 'https://buymeacoffee.com/gregtracy');
    expect(coffeeLink).toHaveAttribute('target', '_blank');

    const emailLink = screen.getByRole('link', { name: /feedback@watchthatpod\.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:feedback@watchthatpod.com');

    expect(screen.getByRole('link', { name: /privacy/i })).toBeInTheDocument();
  });

  it('opens and closes PrivacyModal when clicking privacy link and close button', async () => {
    const user = userEvent.setup();
    render(<Footer />);

    expect(screen.queryByRole('heading', { name: /privacy/i })).not.toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: /privacy/i }));
    expect(screen.getByRole('heading', { name: /privacy/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /close/i }));
    expect(screen.queryByRole('heading', { name: /privacy/i })).not.toBeInTheDocument();
  });
});

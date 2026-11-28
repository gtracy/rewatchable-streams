import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrivacyModal from './PrivacyModal';

describe('PrivacyModal', () => {
  afterEach(() => {
    delete window.gaOptout;
    delete window.gaOptin;
  });

  it('does not render dialog content when closed', () => {
    render(<PrivacyModal open={false} onClose={vi.fn()} />);

    expect(screen.queryByRole('heading', { name: /privacy/i })).not.toBeInTheDocument();
  });

  it('renders privacy details and accessible opt-out/opt-in buttons without javascript: hrefs', () => {
    render(<PrivacyModal open={true} onClose={vi.fn()} />);

    expect(screen.getByRole('heading', { name: /privacy/i })).toBeInTheDocument();
    expect(screen.getByText(/uses Google Analytics/i)).toBeInTheDocument();
    expect(screen.getByText(/Page views and time spent on pages/i)).toBeInTheDocument();
    expect(screen.getByText(/Clicks on various features/i)).toBeInTheDocument();
    expect(screen.getByText(/The type of browser or device used/i)).toBeInTheDocument();

    const optOutButton = screen.getByRole('button', { name: /Opt-Out of Google Analytics/i });
    expect(optOutButton).not.toHaveAttribute('href');

    const optInButton = screen.getByRole('button', { name: /Re-enable Google Analytics Tracking/i });
    expect(optInButton).not.toHaveAttribute('href');

    expect(document.querySelector('a[href^="javascript:"]')).toBeNull();
  });

  it('invokes window.gaOptout and window.gaOptin when clicked and safely no-ops when undefined', async () => {
    const user = userEvent.setup();
    render(<PrivacyModal open={true} onClose={vi.fn()} />);

    const optOutButton = screen.getByRole('button', { name: /Opt-Out of Google Analytics/i });
    const optInButton = screen.getByRole('button', { name: /Re-enable Google Analytics Tracking/i });

    // Safe when globals are undefined
    await user.click(optOutButton);
    await user.click(optInButton);

    window.gaOptout = vi.fn();
    window.gaOptin = vi.fn();

    await user.click(optOutButton);
    expect(window.gaOptout).toHaveBeenCalledTimes(1);

    await user.click(optInButton);
    expect(window.gaOptin).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(<PrivacyModal open={true} onClose={onClose} />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    await user.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

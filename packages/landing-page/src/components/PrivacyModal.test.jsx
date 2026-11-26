import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrivacyModal from './PrivacyModal';

describe('PrivacyModal', () => {
  it('does not render dialog content when closed', () => {
    render(<PrivacyModal open={false} onClose={vi.fn()} />);

    expect(screen.queryByRole('heading', { name: /privacy/i })).not.toBeInTheDocument();
  });

  it('renders privacy details and opt-out/opt-in links when open', () => {
    render(<PrivacyModal open={true} onClose={vi.fn()} />);

    expect(screen.getByRole('heading', { name: /privacy/i })).toBeInTheDocument();
    expect(screen.getByText(/uses Google Analytics/i)).toBeInTheDocument();
    expect(screen.getByText(/Page views and time spent on pages/i)).toBeInTheDocument();
    expect(screen.getByText(/Clicks on various features/i)).toBeInTheDocument();
    expect(screen.getByText(/The type of browser or device used/i)).toBeInTheDocument();

    const optOutLink = screen.getByRole('link', { name: /Opt-Out of Google Analytics/i });
    expect(optOutLink).toHaveAttribute('href', 'javascript:gaOptout();');

    const optInLink = screen.getByRole('link', { name: /Re-enable Google Analytics Tracking/i });
    expect(optInLink).toHaveAttribute('href', 'javascript:gaOptin();');
  });

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(<PrivacyModal open={true} onClose={onClose} />);

    const closeButton = screen.getByRole('button');
    await user.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

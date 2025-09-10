import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  let fetchSpy;

  beforeEach(() => {
    // Clear any previous fetch mocks and set up a new one for each test
    fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]), // Default: successfully fetches empty episode list
      })
    );
  });

  afterEach(() => {
    // Restore the original fetch function after each test
    fetchSpy.mockRestore();
  });

  test('renders loading message initially, then no episodes found', async () => {
    render(<App />);
    
    // Check for initial loading message from EpisodeList
    expect(screen.getByText(/Loading episodes.../i)).toBeInTheDocument();

    // Wait for the fetch to complete and the component to re-render
    await waitFor(() => {
      // After loading and fetching an empty array, it should show "No episodes found"
      expect(screen.getByText(/No episodes found/i)).toBeInTheDocument();
    });

    // Ensure fetch was called
    expect(fetchSpy).toHaveBeenCalledWith('/data.json');
  });
});

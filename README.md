Map The Rewatchables podcast episodes to streaming services where the movies can be watched.

## Components
A mono-repo with multiple lambda functions. 

1. Lambda function that polls the podcast RSS feed 
    - triggered by a cron timer
    a. Identify new episodes
    a. Lookup movie title in podcast_movies to determine new entries
    a. Lookup movie title in TMDB
    a. stash results in podcast_movies
1. Lambda function that locates streaming details for a movie
    - triggered by new Dynamo entries from podcast_movies
    a. Fetch streaming details from MOTN API
    a. stash results in movie_streams
1. Lambda function that builds static web page
    - triggered by a daily cron timer
    a. scan movie_streams
    a. generate HTML for all movies
1. Lambda function that scans the podcast movie table
    - triggered by a daily cron timer
    - the MOTN API has a 100 call limit/day so we need to track state
    a. scan podcast_movie and re-fetch streaming details from MOTN API
    a. stash results in movie_streams

## Testing

Install dependencies across all backend and frontend packages from the repo root:

```bash
npm run install:all
```

Run tests:

```bash
npm test                # Run fixture checks, backend tests, and frontend tests
npm run test:fixtures   # Validate shared JSON fixtures in test/fixtures.js
npm run test:backend    # Run Vitest suites across packages/*, bin, and utils
npm run test:frontend   # Run Vitest suite in packages/landing-page
npm run build:frontend  # Verify the landing-page production Vite build
```

GitHub Actions (`.github/workflows/test.yml`) runs these checks automatically on pushes to `main` and on pull requests.

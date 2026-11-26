import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// Stub dotenv-json and utils/streams before loading app.js.
const dotenvJsonPath = require.resolve('dotenv-json');
require.cache[dotenvJsonPath] = {
  id: dotenvJsonPath,
  filename: dotenvJsonPath,
  loaded: true,
  exports: () => ({}),
};

const mockFetchStream = vi.fn();
const utilsStreamsPath = require.resolve('../../../utils/streams');
require.cache[utilsStreamsPath] = {
  id: utilsStreamsPath,
  filename: utilsStreamsPath,
  loaded: true,
  exports: { fetchStream: mockFetchStream },
};

process.env.LOG_LEVEL = 'silent';

const fixtures = require('../../../test/fixtures');
const app = require('../app');
const appLambda = require('../app-lambda');

const samplePodNewImage = fixtures.loadSample('dynamoPod-StarWars.json');

describe('packages/streams_fetch/app.js', () => {
  beforeEach(() => {
    mockFetchStream.mockReset();
    mockFetchStream.mockResolvedValue(undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('calls fetchStream with parsed integer tmdb_id for INSERT records', async () => {
    const event = {
      Records: [
        {
          eventName: 'INSERT',
          dynamodb: {
            NewImage: samplePodNewImage,
          },
        },
      ],
    };

    await app.handler(event, {});

    expect(mockFetchStream).toHaveBeenCalledTimes(1);
    expect(mockFetchStream).toHaveBeenCalledWith(11);
  });

  it('skips MODIFY and REMOVE records without calling fetchStream', async () => {
    const event = {
      Records: [
        { eventName: 'MODIFY', dynamodb: { NewImage: samplePodNewImage } },
        { eventName: 'REMOVE', dynamodb: { OldImage: samplePodNewImage } },
      ],
    };

    await app.handler(event, {});

    expect(mockFetchStream).not.toHaveBeenCalled();
  });

  it('processes mixed records in order and only fetches INSERT records', async () => {
    const event = {
      Records: [
        { eventName: 'INSERT', dynamodb: { NewImage: { tmdb_id: { N: '115' } } } },
        { eventName: 'MODIFY', dynamodb: { NewImage: { tmdb_id: { N: '999' } } } },
        { eventName: 'INSERT', dynamodb: { NewImage: { tmdb_id: { N: '680' } } } },
      ],
    };

    await app.handler(event, {});

    expect(mockFetchStream).toHaveBeenCalledTimes(2);
    expect(mockFetchStream.mock.calls).toEqual([[115], [680]]);
  });

  it('handles an empty Records array without error', async () => {
    await expect(app.handler({ Records: [] }, {})).resolves.toBeUndefined();
    expect(mockFetchStream).not.toHaveBeenCalled();
  });

  it('propagates errors if fetchStream rejects', async () => {
    mockFetchStream.mockRejectedValueOnce(new Error('Stream API failure'));
    const event = {
      Records: [{ eventName: 'INSERT', dynamodb: { NewImage: { tmdb_id: { N: '11' } } } }],
    };

    await expect(app.handler(event, {})).rejects.toThrow('Stream API failure');
  });
});

describe('packages/streams_fetch/app-lambda.js', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('delegates (event, context) directly to app.handler', async () => {
    const handlerSpy = vi.spyOn(app, 'handler').mockResolvedValue('ok');
    const event = { Records: [] };
    const context = { awsRequestId: 'req-456' };

    const result = await appLambda.handler(event, context);

    expect(handlerSpy).toHaveBeenCalledWith(event, context);
    expect(result).toBe('ok');
  });
});

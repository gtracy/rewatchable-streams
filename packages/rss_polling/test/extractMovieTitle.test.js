import { describe, it, expect } from 'vitest';
import { extractMovieTitle } from '../title.js';

// Cases folded in from the old ad-hoc packages/rss_polling/test.js scratch
// file (deleted as part of the Vitest harness setup, issue #61).
describe('extractMovieTitle', () => {
  it.each([
    ['‘Rudy’ With Bill Simmons and Kyle Brandt', 'Rudy'],
    ["'Rudy' With Bill Simmons and Kyle Brandt", 'Rudy'],
    ["'Greg' Tracy", 'Greg'],
    ["'Greg' Fred Tracy", 'Greg'],
  ])('extracts the quoted title from %s', (input, expected) => {
    expect(extractMovieTitle(input)).toBe(expected);
  });

  it('applies the known title fixes', () => {
    expect(extractMovieTitle('‘A Few Good (Re)Men’ With Bill Simmons')).toBe('A Few Good Men');
    expect(extractMovieTitle('‘Kicking and Screaming (1995)’ With Bill Simmons')).toBe('Kicking and Screaming');
    expect(extractMovieTitle('‘The Re-Heat’ With Bill Simmons')).toBe('Heat');
    expect(extractMovieTitle('‘The Re-Departed’ With Bill Simmons')).toBe('The Departed');
    expect(extractMovieTitle('‘Wayne’ With Bill Simmons')).toBe("Wayne's World");
  });

  it('handles titles without quotes', () => {
    expect(extractMovieTitle('Creed With Bill Simmons, Wesley Morris, Sean Fennessey, and K. Austin Collins')).toBe('Creed');
    expect(extractMovieTitle('The Omen’ With Bill Simmons and Chris Ryan')).toBe('The Omen');
    expect(extractMovieTitle('Miami Vice: Calderone’s Return (Part 1 + 2)')).toBe('Miami Vice');
  });

  it('returns null when no title can be found', () => {
    expect(extractMovieTitle('No quoted title here at all')).toBeNull();
  });
});

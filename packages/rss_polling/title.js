'use strict';

// Pure title-parsing helper for the RSS polling job, extracted verbatim from
// app.js so it can be unit tested without loading the Lambda handler (which
// needs AWS config and a .env.json at import time).
//
// `log` is optional: app.js passes its pino logger; when omitted, logging
// is silent so tests stay quiet.

function extractMovieTitle(str, log) {
  const logger = log || { debug: () => {}, error: () => {} };
  const regex = /['\u2018\u2019\u0022\u201C\u201d](.*?)['\u2018\u2019\u0022\u201C\u201d]/;
  const match = str.match(regex);
  if( match ) {
    logger.debug(str);

    // Some of the movie titles are just wrong. Fix them here.
    if( match[1] === 'A Few Good (Re)Men' ) {
      return 'A Few Good Men';
    } else if( match[1] === 'Kicking and Screaming (1995)' ) {
      return 'Kicking and Screaming';
    } else if( match[1] === 'The Re-Heat' ) {
      return 'Heat';
    } else if( match[1] === 'The Re-Departed' ) {
      return 'The Departed';
    } else if( match[1] === 'Wayne' ) {
      return 'Wayne\'s World';
    } else {
      return match[1];
    }
    // some of the movie titles are poorly formatted. fix those too.
  } else if( str === 'Creed With Bill Simmons, Wesley Morris, Sean Fennessey, and K. Austin Collins' ) {
    return 'Creed';
  } else if( str === "The Omen’ With Bill Simmons and Chris Ryan" ) {
    return 'The Omen';
  } else if( str === "Miami Vice: Calderone’s Return (Part 1 + 2)" ) {
    return 'Miami Vice';
} else {
    logger.error('missing movie title - '+str);
    return null;
  }
}

module.exports = { extractMovieTitle };

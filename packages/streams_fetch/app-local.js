'use strict'

const app = require('./app');

const sample = {
    "Records": [
      {
        "eventSource": "aws:dynamodb",
        "eventName": "INSERT",
        "dynamodb": {
          "Keys": {
            "pod_guid": {"S":"gid://art19-episode-locator/V0/A0AFGtJ0MPhEUUwPaGZGIPuHCgy_784fiXfSOjDQCP8"}
          },
          "NewImage": {
              "tmdb_id": {"N": 640},
              "overview": {"S":"Jeffrey 'The Dude' Lebowski, a Los Angeles slacker who only wants to bowl and drink White Russians, is mistaken for another Jeffrey Lebowski, a wheelchair-bound millionaire, and finds himself dragged into a strange series of events involving nihilists, adult film producers, ferrets, errant toes, and large sums of money."},
              "img": {"S":"/9mprbw31MGdd66LR0AQKoDMoFRv.jpg"},
              "pod_guid": {"S":"gid://art19-episode-locator/V0/A0AFGtJ0MPhEUUwPaGZGIPuHCgy_784fiXfSOjDQCP8"},
              "imdb_id": {"S":"tt0118715"},
              "runtime": {"N":117},
              "pod_title": {"S":"'The Big Lebowski' With Chris Ryan, Sean Fennessey, Jason Concepcion, and David Shoemaker"},
              "movie_title": {"S":"The Big Lebowski"},
              "pod_date": {"S":"Fri, 09 Mar 2018 11:00:00 -0000"},
              "pod_desc": {"S":"The Ringer’s Chris Ryan, Sean Fennessey, Jason Concepcion, and David Shoemaker lace up their bowling shoes and make themselves a batch of White Russians to celebrate the 20th anniversary of the 1998 cult classic ‘The Big Lebowski,’ starring Jeff Bridges and John Goodman and directed by the Coen brothers.\nLearn more about your ad choices. Visit podcastchoices.com/adchoices"},
              "release_date": {"S":"1998-03-06"},
              "tagline": {"S":"They figured he was a lazy, time-wasting slacker. They were right."}
            }
        }
      }
    ]
  }
app.handler(sample);
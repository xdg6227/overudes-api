module.exports = {
  antijoke: function () {
    let anti = require('./assets/antiJoke').antiJoke;
    let a = anti[Math.floor(Math.random() * anti.length)];
    return a.joke;
  }
  // chuckNorris: function () {
  //   let chunk = require('./assets/chuckNorris');
  //   let c = chunk[Math.floor(Math.random() * chunk.length)];
  //   return c.norris;
  // },
  // compliment: function () {
  //   let compliment = require('./assets/compliment');
  //   let c = compliment[Math.floor(Math.random() * compliment.length)]
  //   return c.here
  // },
  // dare: function () {
  //   let dare = require('./assets/dare');
  //   let d = dare[Math.floor(Math.random() * dare.length)]
  //   return d.here
  // },
  // joke: function () {
  //   let joke = require('./assets/joke');
  //   let j = joke[Math.floor(Math.random() * joke.length)]
  //   return j.here
  // },
  // meme: function () {
  //   let meme = require('./assets/meme');
  //   let m = meme[Math.floor(Math.random() * meme.length)]
  //   return m.here
  // },
  // pun: function () {
  //   let pun = require('./assets/pun');
  //   let p = pun[Math.floor(Math.random() * pun.length)]
  //   return c.here
  // },
  // quote: function () {
  //   let quote = require('./assets/quote');
  //   let q = quote[Math.floor(Math.random() * quote.length)]
  //   return q.here
  // },
  // roast: function () {
  //   let roast = require('./assets/roast');
  //   let r = roast[Math.floor(Math.random() * roast.length)]
  //   return r.here
  // },
  // shower: function () {
  //   let shower = require('./assets/shower');
  //   let s = shower[Math.floor(Math.random() * shower.length)]
  //   return s.here
  // },
  // trivia: function () {
  //   let trivia = require('./assets/trivia');
  //   let t = trivia[Math.floor(Math.random() * trivia.length)]
  //   return t.here
  // },
  // truth: function () {
  //   let truth = require('./assets/truth');
  //   let t = truth[Math.floor(Math.random() * truth.length)]
  //   return t.here
  // },
  // uselessWebsite: function () {
  //   let uselessWebsite = require('./assets/uselessWebsite');
  //   let u = uselessWebsite[Math.floor(Math.random() * uselessWebsite.length)]
  //   return u.here
  // }
};

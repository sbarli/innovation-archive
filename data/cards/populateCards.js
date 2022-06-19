const fs = require('fs');

const cards = require('./cardsById');

const formattedCards = Object.keys(cards).reduce((acc, cardId) => {
  const card = {
    cardId: cards[cardId].id,
    name: cards[cardId].name,
    age: cards[cardId].age,
    color: cards[cardId].color,
    dogmaResource: cards[cardId].dogmaResource,
    resourceTotals: {
      numCastles: cards[cardId].numCastles,
      numCrowns: cards[cardId].numCrowns,
      numLeaves: cards[cardId].numLeaves,
      numLightbulbs: cards[cardId].numLightbulbs,
      numFactories: cards[cardId].numFactories,
      numTimepieces: cards[cardId].numTimepieces,
    },
    resourceSpaces: {
      resourceSpace1: cards[cardId].resourceSpace1,
      resourceSpace2: cards[cardId].resourceSpace2,
      resourceSpace3: cards[cardId].resourceSpace3,
      resourceSpace4: cards[cardId].resourceSpace4,
    },
    dogmaEffects: cards[cardId].dogmaEffects.map(effect => {
      const updatedEffect = {...effect};
      delete updatedEffect.dogma;
      return updatedEffect;
    }),
  };
  acc[cardId] = card;
  return acc;
}, {});

fs.writeFile('./output/cards.json', JSON.stringify(formattedCards, null, 2), function(err) {
  if (err) {
    console.error('error writing cards data', err);
    return;
  }
  console.log('successfully wrote cards data');
});
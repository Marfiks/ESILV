/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');

bib_url = "https://guide.michelin.com/fr/fr/restaurants/bib-gourmand";
mr_url = "https://www.maitresrestaurateurs.fr/annuaire/recherche";



async function sandbox (searchLink = 'https://guide.michelin.com/fr/fr/centre-val-de-loire/veuves/restaurant/l-auberge-de-la-croix-blanche') {
  try {
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);

    const restaurant = await michelin.scrapeRestaurant(searchLink);

    console.log(restaurant);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, searchLink] = process.argv;

sandbox(searchLink);

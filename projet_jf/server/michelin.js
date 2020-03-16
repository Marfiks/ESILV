const axios = require('axios');
const cheerio = require('cheerio');


///// RETOURNE LES INFORMATIONS RECOLTEES DEPUIS UN SITE /////
const detailsRestaurantMichelin = data => {
  const $ = cheerio.load(data);

  ///// RECUPERATION NOM /////
  var nom = $('.section-main h2.restaurant-details__heading--title').text();


  ///// RECUPERATION TELEPHONE /////
  var telephone = $('span.flex-fill').first().text();
  // JE NE COMPRENDS PAS POURQUOI ELLE NE FONCTIONNE PAS !!!!
  //const telephone = $('body > main > div.restaurant-details > div.container > div > div.col-xl-8.col-lg-7 > section.section-main > div.row > div.col-md-6 > div.collapse__block > div.collapse__block-item > div.collapse__block_title > div..d-flex > span.flex-fill').text();



  ///// RECUPERATION SPECIALITE /////
  var specialite = $('div.card__menu-footer--price.pl-text.pl-right').eq(1).text();
  specialite = specialite.replace(/[\s]{2,}/g," ");
  specialite = specialite.replace(/[\s]$/,"");
  specialite = specialite.replace(/^[\s]/, "");
  specialite = specialite.replace(/\n/,'');




  ///// RECUPERATION VILLE /////
  var ville = $('body > main > div.restaurant-details > div.container > div > div.col-xl-8.col-lg-7 > section.section.section-main.restaurant-details__main > div.restaurant-details__heading.d-none.d-lg-block > ul').text();
  ville = ville.replace(/\s/g, "");
  ville = ville.split(",");
  ville = ville[1];
  ville = ville.replace('�','o');
  ville = ville.replace('ô','o');
  ville = ville.replace(/\s/g,'');
  ville = ville.replace('\'','');
  ville = ville.replace('ö','o');
  ville = ville.replace('ù','u');
  ville = ville.replace('û','u');
  ville = ville.replace('ü','u');
  ville = ville.replace('î','i');
  ville = ville.replace('ï','i');
  ville = ville.replace('à','a');
  ville = ville.replace('â','a');
  ville = ville.replace('ä','a');
  ville = ville.replace('é','e');
  ville = ville.replace('é','e');
  ville = ville.replace('é','e');
  ville = ville.replace('è','e');
  ville = ville.replace('ê','e');
  ville = ville.replace('ë','e');
  ville = ville.replace('ç','c');  
  ville = ville.replace(/é/g, '');

  if (nom == null || nom == '') {nom = 'Pas de nom';}


  return {nom, ville, specialite, telephone};
};





/**
 * Scrape a given restaurant url
 * @param  {String}  url
 * @return {Object} restaurant
 */
module.exports.scrapeRestaurant = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return detailsRestaurantMichelin(data);
  }

  console.error(status);

  return null;
};

/**
 * Get all France located Bib Gourmand restaurants
 * @return {Array} restaurants
 */
module.exports.get = () => {
  return [];
};

const axios = require('axios');
const cheerio = require('cheerio');



const detailsRestaurantMaitreRestaurateurs = data => {
    const $ = cheerio.load(data);

    ///// RECUPERATION NOM /////
    var name = $('');
    name = name.replace('�','o');
    name = name.replace('ô','o');
    name = name.replace(/\s/g,'');
    name = name.replace('\'','');
    name = name.replace('ö','o');
    name = name.replace('ù','u');
    name = name.replace('û','u');
    name = name.replace('ü','u');
    name = name.replace('î','i');
    name = name.replace('ï','i');
    name = name.replace('à','a');
    name = name.replace('â','a');
    name = name.replace('ä','a');
    name = name.replace('é','e');
    name = name.replace('é','e');
    name = name.replace('é','e');
    name = name.replace('è','e');
    name = name.replace('ê','e');
    name = name.replace('ë','e');
    name = name.replace('ç','c');  
    name = name.replace(/é/g, '');

};


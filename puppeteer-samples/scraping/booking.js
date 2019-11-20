const puppeteer = require('puppeteer');

//let bookingUrl = 'insert booking URL';

/**
 *
 * bookingUrl findes ved en søgning på booking.com
 */

let bookingUrl = `https://www.booking.com/searchresults.en-us.html?label=gen173nr-1FCAEoggI46AdIM1gEaD2IAQGYATG4ARnIAQzYAQHoAQH4AQKIAgGoAgO4Aqu_1e4FwAIB&sid=ef668277d6bc2b5cae0c841cc359244e&sb=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaD2IAQGYATG4ARnIAQzYAQHoAQH4AQKIAgGoAgO4Aqu_1e4FwAIB%3Bsid%3Def668277d6bc2b5cae0c841cc359244e%3Bsb_price_type%3Dtotal%26%3B&ss=Copenhagen%2C+Hovedstaden%2C+Denmark&is_ski_area=&checkin_year=2019&checkin_month=11&checkin_monthday=29&checkout_year=2019&checkout_month=11&checkout_monthday=30&group_adults=1&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=copenhagen&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-2745636&dest_type=city&iata=CPH&place_id_lat=55.678787&place_id_lon=12.579432&search_pageview_id=773d6ed5505c00d1&search_selected=true&search_pageview_id=773d6ed5505c00d1&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0`;
(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 926 });
    await page.goto(bookingUrl);

    // get hotel details
    let hotelData = await page.evaluate(() => {
        let hotels = [];
        // get the hotel elements
        let hotelsElms = document.querySelectorAll('div.sr_property_block[data-hotelid]');
        // get the hotel data
        hotelsElms.forEach((hotelelement) => {
            let hotelJson = {};
            try {
                hotelJson.name = hotelelement.querySelector('span.sr-hotel__name').innerText;
                hotelJson.reviews = hotelelement.querySelector('span.review-score-widget__subtext').innerText;
                hotelJson.rating = hotelelement.querySelector('span.review-score-badge').innerText;
                if(hotelelement.querySelector('strong.price')){
                    hotelJson.price = hotelelement.querySelector('strong.price').innerText;
                }
            }
            catch (exception){

            }
            hotels.push(hotelJson);
        });
        return hotels;
    });

    console.dir(hotelData);
    await browser.close();
})();

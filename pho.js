

function initMap() {
        var uluru = {lat:59.307628, lng:18.020672};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

var links = [
    "www.loveandlemons.com/easy-vegetarian-pho/",
    "happyolks.com/delicious-ambiguity/",
    "www.sbs.com.au/food/recipes/vegetarian-pho-shiitake-mushrooms",
    "food52.com/blog/12363-how-to-make-vegetarian-ph-without-a-recipe",
    "omnivorescookbook.com/vegetarian-pho/",
    "ohmyveggies.com/best-vegetarian-pho-recipe/",
    ];

openStuff1 = function () {
    // get a random number between 0 and the number of links
    var randIdx = Math.random() * links.length;
    // round it, so it can be used as array index
    randIdx = parseInt(randIdx, 10);
    // construct the link to be opened
    var link = 'http://' + links[randIdx];
    // open it in a new window / tab (depends on browser setting)
    window.open(link);

};

var links = [
    "www.loveandlemons.com/easy-vegetarian-pho/",
    "happyolks.com/delicious-ambiguity/",
    "www.sbs.com.au/food/recipes/vegetarian-pho-shiitake-mushrooms",
    "food52.com/blog/12363-how-to-make-vegetarian-ph-without-a-recipe",
    "omnivorescookbook.com/vegetarian-pho/",
    "ohmyveggies.com/best-vegetarian-pho-recipe/",
    ];

openStuff2 = function () {
    // get a random number between 0 and the number of links
    var randIdx = Math.random() * links.length;
    // round it, so it can be used as array index
    randIdx = parseInt(randIdx, 10);
    // construct the link to be opened
    var link = 'http://' + links[randIdx];
    // open it in a new window / tab (depends on browser setting)
    window.open(link);

};

var links = [
    "www.loveandlemons.com/easy-vegetarian-pho/",
    "happyolks.com/delicious-ambiguity/",
    "www.sbs.com.au/food/recipes/vegetarian-pho-shiitake-mushrooms",
    "food52.com/blog/12363-how-to-make-vegetarian-ph-without-a-recipe",
    "omnivorescookbook.com/vegetarian-pho/",
    "ohmyveggies.com/best-vegetarian-pho-recipe/",
    ];

openStuff3 = function () {
    // get a random number between 0 and the number of links
    var randIdx = Math.random() * links.length;
    // round it, so it can be used as array index
    randIdx = parseInt(randIdx, 10);
    // construct the link to be opened
    var link = 'http://' + links[randIdx];
    // open it in a new window / tab (depends on browser setting)
    window.open(link);

};



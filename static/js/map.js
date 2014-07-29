function initialise_map() {
    var map_options = {center: new google.maps.LatLng(53.420882, -1.208496), zoom: 8};
    var map = new google.maps.Map(document.getElementById('map-canvas'), map_options);
    console.log('map created');
}

google.maps.event.addDomListener(window, 'load', initialise_map);

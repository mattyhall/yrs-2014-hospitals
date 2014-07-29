function load_list(places) {
    var list = $('#hospitals-list').html('');
    $.each(places, function(i, place) {
        div = '<div class="hospital-list-item"><h6>' + place.name + '</h6><hr/></div>';
        list.append(div);
    });
}

function load_map(json, map) {
    var markers = [];
    $.each(json, function(i, place) {
        var info = new google.maps.InfoWindow({
            content: place.name,
        });
        var marker = new google.maps.Marker ({
            position: new google.maps.LatLng(place.lat, place.lng),
            map: map,
        });
        google.maps.event.addListener(marker, 'click', function () {
            info.open(map, marker);
        });
        markers.push({m: marker, p: place});
    });
    google.maps.event.addListener(map, 'bounds_changed', function() {
        places = [];
        $.each(markers, function(i, marker) {
            if (map.getBounds().contains(marker.m.getPosition())) {
                places.push(marker.p);
            }
        });
        load_list(places);
    });
}

function load_data(map) {
    $.getJSON('/getplaces', {}, function(json) {
        load_map(json, map);
        load_list(json);
    });
}

function initialise_map() {
    var map_options = {center: new google.maps.LatLng(53.420882, -1.208496), zoom: 6};
    var map = new google.maps.Map(document.getElementById('map-canvas'), map_options);
    load_data(map);
}

google.maps.event.addDomListener(window, 'load', initialise_map);

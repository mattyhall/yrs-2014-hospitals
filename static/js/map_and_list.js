function load_list(places) {
    // remove all data from the list. This is incase some of the places listed
    // don't need to be included anymore
    var list = $('#hospitals-list').html('');
    $.each(places, function(i, place) {
        div = '<div class="hospital-list-item"><a href="/place/' + place.id + 
            '">' + place.name + '</a><br>Average rating: ' + 
            place.rating + '<br><input type="checkbox" name="place-' + place.id
            + '" value="' + place.id + '" class="check-compare"/><hr/></div>';
        list.append(div);
    });
}

function load_map(json, map) {
    var markers = [];
    $.each(json, function(i, place) {
        // for every place add a marker with an infowindow containing a link to
        // it's page
        var info = new google.maps.InfoWindow({
            content: '<a href="/place/' + place.id + '">' + place.name + "</a>",
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
    // when the user changes the zoom/position of the map
    google.maps.event.addListener(map, 'bounds_changed', function() {
        // find all the visible markers and include only them on the list
        places = [];
        $.each(markers, function(i, marker) {
            if (map.getBounds().contains(marker.m.getPosition())) {
                places.push(marker.p);
            } else {
                // don't compare places we can't see
                $("#check-" + marker.p.id).attr("checked", false);
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

// entry point for all initialisers
function initialise_map() {
    // centre around sheffield
    var map_options = {center: new google.maps.LatLng(53.420882, -1.208496), zoom: 6};
    var map = new google.maps.Map(document.getElementById('map-canvas'), map_options);
    // add the data to the map and to the list
    load_data(map);

    // if the search button is clicked or the enter key is pressed in the
    // search box, search for the place name in the search box
    $('#search-btn').click(function () {
        search(map);
    });

    $('#search').keypress(function(e) {
        if (e.which == 13) {
            search(map);
        }
    });

    $("#compare-link").click(function() {
        compare();
    });
}

function search(map) {
    $("#errors").html("");
    query = $('#search').val();
    $.getJSON('/placelocation', {q: query}, function(json) {
        if (json.status == 'ok') {
            // go to the coordinates given
            var latlng = new google.maps.LatLng(json.lat, json.lng);
            map.panTo(latlng);
            map.setZoom(12);
        } else {
            $("#errors").append('<div class="alert alert-danger">Could not ' +
                                'find that place. Please enter a valid place' + 
                                'name or a hospital/clinic');
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialise_map);

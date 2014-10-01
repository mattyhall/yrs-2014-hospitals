function load_list(places) {
    // remove all data from the list. This is incase some of the places listed
    // don't need to be included anymore
    var list = $('#hospitals-list').html('');
    $.each(places, function(i, place_obj) {
        var place = place_obj.p
        div = '<div class="hospital-list-item"><a href="/place/' + place.id + 
            '">' + place.name + '</a><br>Average rating: ' + 
            place.rating + '<input type="checkbox" name="place-' + place.id
            + '" id="check-"' + place.id + '" value="' + place.id 
            + '" class="check-compare pull-right"/></div>';
        $("#check-" + place.id).prop("checked", place_obj.c);
        list.append(div);
    });
}

function bounds_changed(map, markers) {
    // find all the visible markers and include only them on the list
    places = [];
    $.each(markers, function(i, marker) {
        if (map.getBounds().contains(marker.m.getPosition())) {
            var checked = $("#check-" + marker.p.id).is("checked")
            console.log(checked);
            places.push({p: marker.p, c: checked});
        } else {
            // don't compare places we can't see
            $("#check-" + marker.p.id).is("checked", false);
        }
    });
    load_list(places);
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
        bounds_changed(map, markers);
    });
    bounds_changed(map, markers);
}

function load_data(map) {
    $.getJSON('/getplaces', {}, function(json) {
        load_map(json, map);
    });
}

// entry point for all initialisers
function initialise_map() {
    // centre around sheffield
    var map_options = {center: new google.maps.LatLng(50.375456, -4.142656), zoom: 10};
    var map = new google.maps.Map(document.getElementById('map-canvas'), map_options);
    google.maps.event.addDomListener(window, "resize", function() {
       var center = map.getCenter();
       google.maps.event.trigger(map, "resize");
       map.setCenter(center); 
    });
    // add the data to the map and to the list
    load_data(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.panTo(latlng);
            map.setZoom(12);
        });
    }

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

    // we intercept the form submit to do some error checking
    $("#compare-form").submit(function(e) {
        //e.preventDefault();
        $("#errors").html("");
        if ($(".check-compare:checked").length < 2) {
            add_error("Please select two or more places to compare");
            // don't submit
            return false;
        }
        // do submit
        return true;
    });
}

// create an error alert
function add_error(msg) {
    $("#errors").append('<div class="alert alert-danger">' + msg + '</div>');
}

function search(map) {
    $("#errors").html("");
    query = $('#search').val();
    if (query != '') {
        $.getJSON('/placelocation', {q: query}, function(json) {
            if (json.status == 'ok') {
                // go to the coordinates given
                var latlng = new google.maps.LatLng(json.lat, json.lng);
                map.panTo(latlng);
                map.setZoom(12);
            } else {
                add_error('Could not find that place. Please enter a valid place' +
                            'name, postcode or a hospital/clinic');
            }
        });
    } else {
        add_error("Please enter a search term");
    }
}

google.maps.event.addDomListener(window, 'load', initialise_map);

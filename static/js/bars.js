var red = "#E33B3B";

function create_bar(element_id, rating) {
    // the width of a bar on the individual page
    w = 100;
    // the height of a bar on the individual page
    h = 20;
    // the multiplier to go from a rating to a width
    mult = 20;
    // let's make sure that all ratings are positive. Should be ensured by the
    // importer but better safe that sorry!
    if (rating > 0) {
        // create an svg at the element with element_id as it's id
        var svg = d3.select("#"+element_id)
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);
        // colour the whole bar red to start with
        svg.append("rect")
           .attr("x", 0)
           .attr("y", 0)
           .attr("width", w)
           .attr("height", h)
           .attr("fill", red);

        // colour part of the bar green to show how good the rating is
        // this will look sort of like a progress bar
        svg.append("rect")
           .attr("x", 0)
           .attr("y", 0)
           .attr("width", rating * mult)
           .attr("height", h)
           .attr("fill", "green");
        // insert the actual rating so the data is available
        $('<td class="rating">' + rating + '</td>').insertAfter("#"+element_id);
    } else {
        $("#"+name).text("No rating found");
    }
}

// bar width, height, multiplier to go from rating to bar width, medium
// threshold, good threshold
function create_barchart_horiz(w, h, mult) {
    var elems = $(".rating");
    $.each(elems, function(i, elem) {
        var rating = $(elem).text();
        $(elem).text("");
        if (rating < 0) {
            $(elem).text("No rating");
            return;
        }
        var svg = d3.select("#" + $(elem).attr("id"))
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);
        svg.append("rect")
           .attr("x", 0)
           .attr("y", 0)
           .attr("width", w)
           .attr("height", h)
           .attr("fill", red);
        svg.append("rect")
           .attr("x", 0)
           .attr("y", 0)
           .attr("width", rating * mult)
           .attr("height", h)
           .attr("fill", "green");
        svg.append("text")
           .text(function() {return rating})
           .attr("y", 15)
           .attr("x", 1)
           .attr("fill", "white");
    });
}

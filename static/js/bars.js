// the width of a bar
w = 100;
// the height of a bar
h = 20;
// the multiplier to go from a rating to a width
mult = 20;

function create_bar(element_id, rating) {
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
           .attr("fill", "red");

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

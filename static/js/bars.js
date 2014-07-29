w = 100;
h = 20;
mult = 20;

function create_bar(name, rating) {
    if (rating > 0) {
        var svg = d3.select("#"+name)
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);
        svg.append("rect")
           .attr("x", 0)
           .attr("y", 0)
           .attr("width", w)
           .attr("height", h)
           .attr("fill", "red");

        svg.append("rect")
           .attr("x", 0)
           .attr("y", 0)
           .attr("width", rating * mult)
           .attr("height", h)
           .attr("fill", "green");
        $('<td class="rating">' + rating + '</td>').insertAfter("#"+name);
    }
    else {
        $("#"+name).text("No rating found");
    }
}

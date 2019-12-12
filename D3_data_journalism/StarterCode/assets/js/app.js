// @TODO: YOUR CODE HERE!

// SVG dimensions defined
var svgWidth = 960;
var svgHeight = 500;

// Chart object defined
var margin = {
  top: 60,
  right: 60,
  bottom: 120,
  left: 150
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// svg
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// group charts
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  D3.csv("/assets/data/data.csv").then(function(myData) {

    // number conversion
    myData.forEach(function(xdata) {
        xdata.poverty = +xdata.poverty;
        xdata.healthcare = +xdata.healthcare;
  },)});


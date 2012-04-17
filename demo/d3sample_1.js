/*
init = function() { 
	var data = [4, 8, 15, 16, 23, 42];

	var chart = d3.select("body").append("svg")
					.attr("class", "chart"). attr("width", 420)
					.attr("height", 20*data.length);

	var x = d3.scale.linear().domain([0, d3.max(data)]).range([0, 420]);

	chart.selectAll("rect").data(data)
		.enter().append("rect")
		.attr("y", function(d,i) { return i*20;})
		.attr("width", x)
		.attr("height", 20);
};
*/

init = function() {
	test = new cv.graph();
	test.init(cv.constants.defaultGraphdef);
	//test.xAxis.tickSubdivide(5); test.horGrid.call(test.xAxis);
	//test.remove();
	//test.removeHorAxis();
	//test.removeVerAxis();
	//test.removeHorGrid();
	testData = [ 40, 20, 80, 30, 100, 30, 10, 50, 20, 40, 60, 90 ];
	/*xdscale = d3.scale.ordinal().domain(testData).rangeRoundBands([0, test.dimension.width - test.margin.left - test.margin.right], .2);
	test.bar = test.panel.selectAll("g.bar").data(testData).enter().append("rect")
				.attr("height", function (d) { return test.dimension.height - test.margin.top - test.margin.bottom - test.yScale(d);})
				.attr("width", xdscale.rangeBand())
				.attr("y", function (d) { return test.yScale(d);})
				.attr("x", function (d) { return xdscale(d);})
				.style("fill", "#eee").style("stroke","#111");*/

	ydscale = d3.scale.ordinal().domain(testData).rangeRoundBands([0, test.dimension.height], .2);
	test.bar = test.panel.selectAll("g.bar").data(testData).enter().append("rect")
				.attr("height", ydscale.rangeBand())
				.attr("width", function (d) { return test.xScale(d);})
				.attr("x", function (d) {return 0;})
				.attr("y", function (d) {return ydscale(d);})
				.style("fill", "#eee").style("stroke","#111");
}
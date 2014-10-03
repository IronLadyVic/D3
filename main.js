window.onload = function(){

	 var dataSet = [ 
	// - this is an array of objects
		{skill:"a",value:50}, //the skillset is 0-50 and we are trying to fit in these values within the hight of 50increments.
		{skill:"b",value:80},
		{skill:"c",value:70},
		{skill:"d",value:60},
		{skill:"e",value:80},
		{skill:"f",value:80},
		{skill:"g",value:90},
		{skill:"h",value:80},
		{skill:"i",value:80},
		{skill:"x",value:80},
		{skill:"y",value:80}
	];

var max = d3.max(dataSet, function(d){

	return d.value; //use the value of the objects to find out the max value of the objects
});

var height = d3.scale.linear().domain([0,max]).range([0,40]); //this will scale linear Y. what range do you want to scale to. between 0 -40

var x = d3.scale.linear().domain([0,dataSet.length-1]).range([5,55]); //translating my value from 5 leaving a gap at the beggining of graph and space at the end.

var colour = d3.scale.category20(); //there is 20 colours//if you see category10, for each scale of that value it will return that colour value.
var svg = d3.select("svg");

// svg.selectAll("g").data(dataSet).enter();//now databinding so that this is automatically distributed into the DOM
var collection = svg.selectAll("g").data(dataSet);

//this collection here will find the x function and execute on i

collection.enter().append("g").attr("transform",function(d, i){
	return "translate("+x(i)+",0)";

});

collection.append("rect").attr("height",function(d){
		return height(d.value);
		})
		.attr("width",2)
		.attr("fill",function(d,i){
			return colour(i);
		})

		.attr("y",function(d){
			return 40 - height(d.value);
		});


// collection refers to the group

collection.append("text")
	.text(function(d){
		return d.skill;
	})
	.attr("y", 42)
	.attr("font-size",2);
// console.log(max);


};
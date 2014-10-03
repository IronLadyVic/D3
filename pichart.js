window.onload = function(){

	 var dataSet = [ 
		{skill:"a",value:50}, 
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

	var pie = d3.layout.pie(); //we need to tell the svg what value are the angle of the pie charts

	pie.value(function(d){
		return d.value;

	});

	var pieDataSet = pie(dataSet);
	var colour = d3.scale.category10();

		// console.log(pieDataSet); //it is adding all the 10 values together divided by 100 and creating a percentage and will do a pie angle.

		//buildin function to make an arc in svg.

		var arc = d3.svg.arc().innerRadius(5).outerRadius(20); //inner radius is the inner cirle to outer
		var svg = d3.select("svg");

		svg.selectAll("path").data(pieDataSet).enter().append("path").attr("fill",function(d,i){
				return colour(i);
		}).attr("d",arc).attr("transform","translate(20,20)"); //d is data and it has an angle
			//return formula to make that arc

		

};
function GRIDCREATED(){

//SIZE  = prompt("Please enter the size of the canvas", "20");

SIZE = 20;

var div = document.getElementById("master");

for(var j = 1; j <= SIZE; j++)
{
	for(var i = 1; i <= SIZE; i++)
    {
		var p  = document.createElement("P");
		//var t =  document.createTextNode("P");
		//p.appendChild(t);
		p.setAttribute("id", j + "-" + i);
		p.setAttribute("onClick", "createblock(this.id)");
		div.appendChild(p);
	}
	var br  = document.createElement("BR");
    div.appendChild(br);
	}
 }
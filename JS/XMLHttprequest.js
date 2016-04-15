//EXPORT AND SAVE PICTURE
var numbFr = 0;
function ClassExportMap(){
	
	//save name
	var saveNameMap = prompt("please enter a name", "save the map");
	
	var arrayCases = "";
	//A simple system to fetch each class css color color and  store them in a String
	//php will cut the string in a array to generate a pictur
	for(var Cj = 1; Cj <= 20;  Cj++)
	{
		for(var Ci = 1; Ci <= 20; Ci++){
			CaseTarget = document.getElementById(Cj + "-" + Ci);

			arrayCases += (CaseTarget.className + "_");
 
		}
	}
	  //set a number to save another picture
	  numbFr++;
	  
	  xhrIMG = new XMLHttpRequest(); 
	  
	  xhrIMG.open("POST", "./save.php", true);
	  xhrIMG.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	  
	  //invoice a big string of color and a number to generate a save with two post treatement
	var sendparams = "name="+ saveNameMap + "&fieldFr=" + arrayCases_fr + "&numbFr=" + numbFr + p ;
	xhrIMG.send(sendparams);
	xhrIMG.onreadystatechange = function(){
		if(xhrIMG.readyState == 4 && xhrIMG.status == 200){
			//alert(xhrIMG.responseText);
		}
	}
function Dmove(){
	valeurc.Y += 1;

	//go to the next line
	if(valeurc.Y >= 20){
	valeurc.Y = 20;
	}
	
    Ddone = 1;

	actualFr += 1;
		
    if(actualFr == 4){
       actualFr = 1;
     }
	Dblock = document.getElementById((valeurc.Y )+"-" + ( valeurc.X )).className;
	if(Dblock == "wall"){
		valeurc.Y -= 1;
	}
	
	Dvblock = document.getElementById((valeurc.Y )+"-" + ( valeurc.X ));
	Dvblock.className = ( 'Dpac'+ actualFr );

	if(valeurc.Y >= 2){
		var DcaseBefore = (valeurc.Y-1);
		DVerifyCase = document.getElementById((DcaseBefore )+ "-" + ( valeurc.X )).className;
		if( DVerifyCase = ('Dpac'+ actualFr) ){
				document.getElementById((DcaseBefore) + "-" + ( valeurc.X )).className = "floor";
		}else{
			document.getElementById((DcaseBefore) + "-" + ( valeurc.X )).className = "wall";
		}
	
	}
	//go to next valeurc
}
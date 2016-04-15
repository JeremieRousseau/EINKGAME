function Umove(){

	valeurc.Y -= 1;

	//go to the next line
	if(valeurc.Y <= 1){
	valeurc.Y = 1;
	}

    Udone = 1;


	actualFr += 1;
		
    if(actualFr == 4){
       actualFr = 1;
     }
	Ublock = document.getElementById((valeurc.Y )+"-" + ( valeurc.X )).className;
	if(Ublock == "wall"){
		valeurc.Y += 1;
	}
	
	Dvblock = document.getElementById((valeurc.Y )+ "-" + ( valeurc.X ));
	Dvblock.className = ('Upac'+ actualFr );
	if(valeurc.Y >= 1){
    var UcaseBefore = (valeurc.Y + 1);
	UVerifyCase = document.getElementById((UcaseBefore )+"-" + ( valeurc.X )).className;
		if( UVerifyCase = ('Upac'+ actualFr) ){
				document.getElementById((UcaseBefore )+"-" + ( valeurc.X )).className = "floor";
		}else{
			document.getElementById((UcaseBefore )+"-" + ( valeurc.X )).className = "wall";
		}
	}
}
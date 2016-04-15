function Rmove(){

	valeurc.X += 1;

	//go to the next line
	if(valeurc.X >= 20){
	valeurc.X = 20;	
	}

	//delay for the keyboard between two event,
    Rdone = 1;
	//number of the frame

	actualFr += 1;
	
	//create a loop between frame of animation
    if(actualFr == 4){
       actualFr = 1;
     }
	
	Rblock = document.getElementById((valeurc.Y )+"-" + ( valeurc.X )).className;
	if(Rblock == "wall"){
		valeurc.X -= 1;
	}
	var Rv = document.getElementById( (valeurc.Y )+ "-" + ( valeurc.X));
	Rv.className = ('Rpac'+ actualFr );
	
	if(valeurc.X >= 2){
	var RcaseBefore = (valeurc.X-1);
	RVerifyCase = document.getElementById( (valeurc.Y +"-" + (RcaseBefore) )).className;

		if( RVerifyCase = ('Rpac'+ actualFr) ){
				document.getElementById( (valeurc.Y +"-" + (RcaseBefore) )).className = "floor";
		}else{
			document.getElementById( (valeurc.Y +"-" + (RcaseBefore) )).className = "wall";
		}
	}
}


function Lmove(){
	
    valeurc.X -= 1;
    		
	//stop at the limit
	if(valeurc.X <= 0){
	valeurc.X = 1;
	} 
	
    //delay for the keyboard between two event,
    done = 1;
	//number of the frame
	actualFr += 1;
		
	//create a loop between frame of animation
    if(actualFr == 4){
       actualFr = 1;
     }
	 
	Lblock = document.getElementById((valeurc.Y )+"-" + ( valeurc.X )).className;
	if(Lblock == "wall"){
		valeurc.X += 1;
	}
	var Lv = document.getElementById( (valeurc.Y )+"-" + ( valeurc.X));
	Lv.className = ('Lpac'+ actualFr );


	if(valeurc.X <= 19){
	var LcaseBefore = (valeurc.X+1);
	LVerifyCase = document.getElementById( (valeurc.Y +"-" + (LcaseBefore) )).className;
		if( LVerifyCase = ('Lpac'+ actualFr) ){
				document.getElementById( (valeurc.Y +"-" + (LcaseBefore) )).className = "floor";
		}else{
			document.getElementById( (valeurc.Y +"-" + (LcaseBefore) )).className = "wall";
		}
	}			
}
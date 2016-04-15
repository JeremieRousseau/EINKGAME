function Blast(){

var Bdiv = document.getElementById("master");
var Bp  = document.createElement("P");
		Bp.setAttribute("id", ("B" + valeurc.Y +"-" + valeurc.X));
		Bp.setAttribute("class", "blast");
		Bdiv.appendChild(Bp);
Mlc = 0;
Tkl = 0;
if(Tkl < 1){
	Mlc +=20;
}

setInterval(function Tir(){

	Mlc += 20;
document.getElementById(("B" + valeurc.Y +"-" + valeurc.X)).style.marginLeft = Mlc + "px";  
;
}, 250);

Tkl += 1
}

		/*				if(Lt == 1 ){
		valeurc.X -= 1; ParX = 1;
		Tir(ParX, ParY);
			}
						if(Ut == 1 ){
		valeurc.Y -= 1; ParY = 1;
		Tir(ParX, ParY);
			}
									if(Dt == 1 ){
		valeurc.Y += 1; ParY = 1;
		Tir(ParX, ParY);
			}*/
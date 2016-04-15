document.addEventListener('keydown', function(event){
	
	
	
//blast
if(event.keyCode == 32){
	Blast();
}

if(event.keyCode == 68){
if(Rdone == 1 || Rdone == 0){
setTimeout(Rmove(), 2);
Rdone = 1;
Rt = 1;
event.returnValue = false;
}else{
event.returnValue = false;
}
}

if(event.keyCode == 83){
if(Ldone == 1 || Ldone == 0){
setTimeout(Lmove(), 2);
Ldone = 1;
Lt = 1;
event.returnValue = false;
}else{
event.returnValue = false;
}
}
if(event.keyCode == 88){

if(Ddone == 1 || Ddone == 0){
setTimeout(Dmove(), 2);
Ddone = 1;
Dt = 1;
event.returnValue = false;
}else{
event.returnValue = false;
}
}
if(event.keyCode == 69){
if(Udone == 1 || Udone == 0){
setTimeout(Umove(), 2);
Udone = 1;
Ut = 1;
event.returnValue = false;
}else{
event.returnValue = false;
}
}
if(event.keyCode == Default){
  event.returnValue = false;
}





},false);





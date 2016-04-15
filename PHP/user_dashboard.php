<?php
session_start();
?>

<!DOCTYPE html>
  <html>
	<head>
	<title>Les Ténébres...</title>
	  
  <style>html{ 
}
body
{
	color: white;
	background:	black;
	padding: 0px;
	margin: 0px;
}
div{
	margin:0px;
	padding:0px;
}
p{
	margin;right:0px;
	margin-left:0px;
	margin-top:0px;
	margin-bottom:0px;
	padding:0px;
	width:20px;
	height:25px;
	float:left;
	}
br{
	margin:0px;
	padding:0px;
	width:20px;
	height:20px;
	clear:left;
	}
.floor{
	background-image:url('../animation/frame_black.png');
}
.wall{
	background-image: url("../animation/frame_block.png");
}

.blast{
	z-index: 1;
	background-image: url("../animation/W/blast.png");
}

.empty{
	z-index: 1;
	background-image: url("");
}

.Dpac1{			z-index: 0;	background-image: url("../animation/D/Dpacman_1.png")	}
.Dpac2{			z-index: 0;	background-image: url("../animation/D/Dpacman_2.png")	}
.Dpac3{			z-index: 0;	background-image: url("../animation/D/Dpacman_3.png")	}
.Dpac4{			z-index: 0;	background-image: url("../animation/D/Dpacman_4.png")	}

.Lpac1{			z-index: 0;	background-image: url("../animation/L/Lpacman_1.png")	}
.Lpac2{			z-index: 0;	background-image: url("../animation/L/Lpacman_2.png")	}
.Lpac3{			z-index: 0;	background-image: url("../animation/L/Lpacman_3.png")	}
.Lpac4{			z-index: 0;	background-image: url("../animation/L/Lpacman_4.png")	}

.Rpac1{			z-index: 0;	background-image: url("../animation/R/Rpacman_1.png")	}
.Rpac2{			z-index: 0;	background-image: url("../animation/R/Rpacman_2.png")	}
.Rpac3{			z-index: 0;	background-image: url("../animation/R/Rpacman_3.png")	}
.Rpac4{			z-index: 0;	background-image: url("../animation/R/Rpacman_4.png")	}

.Upac1{			z-index: 0;	background-image: url("../animation/U/Upacman_1.png")	}
.Upac2{			z-index: 0;	background-image: url("../animation/U/Upacman_2.png")	}
.Upac3{			z-index: 0;	background-image: url("../animation/U/Upacman_3.png")	}
.Upac4{			z-index: 0;	background-image: url("../animation/U/Upacman_4.png")	}
	</style>
	</head>
	<body onload="GRIDCREATED(); map()">
	  <div id="master"> 
	  </div>
	  <br><br><br><p>
 
  <?php 
	echo "tout est okay!";
	if(isset($_SESSION["user_name_s"])){
		echo $_SESSION["user_name_s"];
		echo "click here ";
		echo "<a href='logout.php' title='logout' >to Logout.</a>";
	  }
	?>
 
	  </p>
 <p id="DebugSetInterval"></p>

	<script src="../JS/grid.js" ></script>
	<script src="../JS/map.js" ></script>
	<script src="../JS/start_variables.js"></script>
	<script src="../JS/keyboards.js" ></script>

	<script src="../JS/Right_move.js" ></script>
	<script src="../JS/Left_move.js" ></script>
	<script src="../JS/Down_move.js" ></script>
	<script src="../JS/Up_move.js" ></script>
	<script src="../JS/blast.js" ></script>
  
	</body>
  </html>

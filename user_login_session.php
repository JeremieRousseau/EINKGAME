<?php
session_start();

$message = "";

if(count($_POST) > 0){
$conn = new mysqli("127.0.0.1", "root", "", "mysql");


if($conn->connect_error){
   die("Connection failed :" .$conn->connect_error);
}

$query = "SELECT * FROM users WHERE user_name='".$_POST["user_name"]."' AND user_password='".$_POST["password"]."' ";

$conn->multi_query($query);

$result = $conn->use_result();

if($row = $result->fetch_assoc() ){


$_SESSION["user_name_s"] = $row["user_name"];
$_SESSION["password_s"] = $row["user_password"];

}else{
 $message = "<p>Invalid username or Password</p>";
}



if(isset($_SESSION["user_name_s"])){

header("location:index.php");
}
}
?>

<!DOCTYPE html>
<html>
<head>.p
  <title>Yes</title>
  <link rel="stylesheet" type="text/css" href="./css/game.css" >
</head>
<body>
	<h1>Enter your Login :</h1>
	
	<form name="" method="post" action="user_login_session.php"> 
		<input type="text" name="user_name" >
		<input type="password" name="password">
		<input type="submit" name="submit" value="submit" >
	</form>
	
	<div >
		<?php if($message != ""){ echo $message; } ?>
	</div>

</body>
</html>



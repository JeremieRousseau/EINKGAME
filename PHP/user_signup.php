<?php
$message_signup = "";

$conn = new mysqli("127.0.0.1", "root", "", "mysql");


if($conn->connect_error){
	die("Connection failed :" .$conn->connect_error);
}

if(isset($_POST["f_user_name"]) && isset( $_POST["f_user_password"]) && isset($_POST["f_user_email"])){

//system d'erreurs a ameliorer, 
//affiche une erreur si c'est vide

$error_username = "<p>pseudonyme incorrect</p>";
$error_useremail = "<p>email incorrect</p>";
$error_userpassword = "<p>password incorrect</p>";

//verifie si $_POST est securise, 
function check_input($cols, $data, $error){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
		//si le nombre de symbo
		if(strlen($data) == 0 ){
			//si pas global variable cantonner a fonction
			global $message_signup ;
			$message_signup = $error;
		  
		}else{
			global $conn;
$result = mysqli_query($conn, "SELECT id FROM users WHERE $cols='".$data."' ");
					if(mysqli_num_rows($result) == 1){
							// Pseudo déjà utilisé
							$error = 'Ce '. $cols .' est déjà utilisé';
							global $message_signup ;
							$message_signup = $error;
					
					}else{
							return $data;
					}
				}
			
}

//simplifier $_post ???
$username = check_input( "user_name", $_POST["f_user_name"], $error_username);

$useremail = check_input( "user_email", $_POST["f_user_email"], $error_useremail);
if(!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $useremail) ){
	$useremail = ' ';
}

$userpassword = check_input( "user_password", $_POST["f_user_password"], $error_userpassword);

//die("<br><br>error :".$message_signup);
if($message_signup == ''){

//insert into 
$sql = "INSERT INTO users (user_name, user_password, user_email) 
           VALUES ( '".$username."','". $userpassword."', '".$useremail."' )";

  if($conn->multi_query($sql) === TRUE){
   
    $_SESSION["user_name_s"] = $username;
    $_SESSION["user_email_s"] = $useremail;
    $_SESSION["password_s"] = $userpassword;
   
	$int = 365*24*3600;
   
	setcookie("pseudo", $username, time()+$int, '/'); 
	setcookie("password", $userpassword, time()+$int, '/');
   
	header("location:user_dashboard.php");
    
    $conn->close();
    
    }
}
}
?>
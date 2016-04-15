
<?php
$conn = new mysqli("127.0.0.1", "root", "", "mysql");


if($conn->connect_error){
	die("Connection failed :" .$conn->connect_error);
}

$result = mysqli_query($conn, "SELECT id FROM users WHERE user_name='zekk' ");

if(mysqli_num_rows($result) > 0){

    echo mysqli_num_rows($result);
}else{


echo "et merde";	}


?>
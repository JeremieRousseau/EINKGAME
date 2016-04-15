<?php

	if(isset($_COOKIE["pseudo"]) && isset($_COOKIE["password"])){
		header("location:PHP/user_dashboard.php");
	}else{
		header("location:PHP/login.php");
	}
?>
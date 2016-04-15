<?php
session_start();
unset($_SESSION["user_id"]);
unset($_SESSION["user_name_s"]);
unset($_SESSION["user_password_s"]);
header("location:../user_login_session.php");
?>
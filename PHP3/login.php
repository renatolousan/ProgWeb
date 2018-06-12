<?php

$user = "demo";
$pass = "demo";
$login = $_POST["username"];
$password = $_POST["password"];

if (($login == $user) && ($pass == $password)) {
	header('Location:form.php');
}else {
	echo "<p>Usuário ou senha incorretos!</p>";
}

 ?>

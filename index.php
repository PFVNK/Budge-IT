<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"charset="utf-8">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Permanent+Marker|Roboto" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="main.css">
	<title onclick="location.href='index.php'">BUDGE IT</title>
</head>
<body>
<h1>BUDGE-IT</h1>
<div id="total">
	<p>LOGIN</p>
</div>
<div id ="input">
<form action="login.php" method="POST">
	<input type="text" name="uid" placeholder="UserName">
	<br>
	<input type="password" name="pwd" placeholder="PassWord">
	<br>
	<div id="btn">
	<button type="submit">LOGIN</button>
	</div>
</form>	
</div>
<div id="foot">
<p>Dont have an account? Create one <a href="signin.php">HERE</a></p>
</div>
<script type="text/javascript" src="first.js"></script>
</body>
</html>

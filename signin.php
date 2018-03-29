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
<h1 onclick="location.href='index.php'">BUDGE-IT</h1>
<div id="total">
	<p>SIGN UP</p>
</div>
<div id="input">
<form action="signup.php" method="POST">
	<input type="text" name="fullname" placeholder="FullName">
	<br>
	<input type="text" name="uid" placeholder="UserName">
	<br>
	<input type="password" name="pwd" placeholder="PassWord">
	</div>
	<br>
	<div id="btn">
	<button type="submit">SIGN UP</button>
	</div>
</form>	

<script type="text/javascript" src="first.js"></script>
</body>
</html>

<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"charset="utf-8">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.21.0/moment.min.js"></script>

	<link href="https://fonts.googleapis.com/css?family=Permanent+Marker|Roboto" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="main.css">
	<title>BUDGE IT</title>
</head>
<body onload="displayCash(), displayEntry()">
	<h1 onclick="location.href='home.html'">BUDGE-IT</h1>

	<?php
		if (isset($_SESSION['id'])) {
			echo "<div class='welcome', style='color:white;'> Welcome, ".$_SESSION['uid']."</div>";
		}
	?>
	<div class="logout">
	<form action="logout.php" method="GET">	
		<button onclick="logout.php">LOGOUT</button>
	</form>	
	</div>
	<div id="total">
		<p>INCOME</p>
	</div>
	<div id="input">		
		<p>CASH</p>
<!-- 		<button type="button" value="save" onclick="cashInsert(); getInItems()">ENTER</button>
 -->	<input id="cashinitem" placeholder="Item">
		<br>
		<input id="cashin" type="text" placeholder="Amount" onkeyup="if (window.event.keyCode == 13) cashInsert(), getInItems()">		
		<br> 		
		<p>BANK</p>
<!-- 		<button onclick="bankInsert(); getInItems()">ENTER</button>
 -->	<input id="bankinitem" placeholder="Item">
		<br>
		<input id="bankin" type="text" placeholder="Amount" onkeyup="if (window.event.keyCode == 13) bankInsert(), getInItems()"> 
		
	</div>
<script type="text/javascript" src="first.js"></script>
</body>

</html>
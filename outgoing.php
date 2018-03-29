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
		<p>OUTGO</p>
	</div>
	<div id="input">
		<p>CASH</p>
<!-- 		<button onclick="cashOutsert(); getOutItems()">ENTER</button>
 -->	<input id="cashoutitem" placeholder="Item">
		<br>
		<input id="cashout" type="text" placeholder="Amount" onkeyup="if (window.event.keyCode == 13) cashOutsert(), getOutItems()">

		
		<p>BANK</p>
<!-- 		<button onclick="bankOutsert(); getOutItems()">ENTER</button>
 -->	<input id="bankoutitem" placeholder="Item">
		<br>
		<input id="bankout" type="text" placeholder="Amount" onkeyup="if (window.event.keyCode == 13) bankOutsert(), getOutItems()"> 
		
	</div>
<script type="text/javascript" src="first.js"></script>
</body>

</html>
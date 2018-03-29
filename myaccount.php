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
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.bundle.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.21.0/moment.min.js"></script>
	<title>BUDGE IT</title>
</head>
<body onload="displayEntry(), displayCash()">
<h1 onclick="location.href='home.php'">BUDGE-IT</h1>

	<?php
		if (isset($_SESSION['id'])) {
			echo "<div class='welcome', style='color:white;'> Welcome, ".$_SESSION['uid']."</div>";
		}
	?>
	<div class="logout">
	<form action="logout.php" method="GET">	
		<button onclick="logout.html">LOGOUT</button>
	</form>	
	</div>
<div id="total">
	<p>MY ACCOUNT</p>
</div>
<canvas id="myChart" width="400" height="400"></canvas>

<div class="headline">
	<div id='d'>DATE &emsp;&emsp;</div>
	<div id='i'>ITEM</div>
	<div id='a'>AMOUNT</div>
</div>

<div class="box">
	<div id="one"></div>
	<div id="two"></div>
	<div id="three"></div>
</div>
	
	
<script type="text/javascript" src="first.js"></script>
</body>

</html>
<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"charset="utf-8">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	// <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Permanent+Marker|Roboto" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="main.css">
	<title>BUDGE IT</title>
</head>
<body onload="displayCash(), displayEntry()">
	<h1 onclick="location.href='index.html'">BUDGE-IT</h1>

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
	<div id="display">	
		<div id="total">
      		<p>TOTAL: $ <span id="accountTotal"></span></p>
    	</div>
    	<div id="container">	
    		<div id="cashprint">
     			<p>CASH: $ <span id="cashTotal"></span></p>
     		</div>	
     		<div id="banktotal"> 
      			<p>BANK: $ <span id="bankTotal"></span></p>
    		</div>
    	</div>
    </div>		
		<div id="butt">
			<button id="inbtn" onclick="location.href='deposit.php'">IN</button>
			<button id="outbtn" onclick="location.href='outgoing.php'">OUT</button>
		</div>
		<div id="myacc">	
			<button onclick="location.href='myaccount.php', storeDay()">MY ACCOUNT</button>
		</div>
	
<script type="text/javascript" src="first.js"></script>
</body>

</html>

<?php
session_start();
include 'dbh.php';

$uid = $_POST['uid'];
$pwd = $_POST['pwd'];

$sql = "SELECT * FROM user WHERE uid='$uid' AND pwd='$pwd'";
$result = mysqli_query($conn, $sql);

if (!$row = mysqli_fetch_assoc($result)) {
	echo "Your Username or Password is incorrect";
} else {
	$_SESSION['id'] = $row['id'];
	$_SESSION['uid'] = $row['uid'];
}

header("Location: home.php");
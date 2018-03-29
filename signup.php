<?php
session_start();
include 'dbh.php';

$fullname = $_POST['fullname'];
$uid = $_POST['uid'];
$pwd = $_POST['pwd'];

$sql = "INSERT INTO user (fullname, uid, pwd) 
VALUES ('$fullname', '$uid', '$pwd')";

$result = mysqli_query($conn, $sql);

header("Location: index.php"); 
<?php
session_start();

$conn = mysqli_connect("localhost", "root", "root", "budget");

if (!$conn) {
	die("Connection Failed");
}
<?php

	
	$dbhost = 'pdb35.awardspace.net';
	$dbuser = '1921110_blog';
	$pass = '^8colorado^';
	$dbName = '1921110_blog';


	$conn =  mysqli_connect($dbhost, $dbuser, $pass, $dbName);

	if($conn->connect_error){
		die("Connection failed: " . $conn -> $connection_error);
	}

	$sql = "SELECT * FROM Content";

	$result = $conn->query($sql);

	$contentArray = array();
	
	header('Content-type: application/json');

	if($result->num_rows > 0){
		
		while($row = $result->fetch_assoc()){
			

			array_push($contentArray, $row);
		

		}
		echo json_encode($contentArray);
	}else{
		
		echo 'no data';
	}

	$conn->close();
	

	
	
	

?>
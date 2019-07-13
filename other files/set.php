<?php

	$dbhost = 'pdb35.awardspace.net';
	$dbuser = '1921110_blog';
	$pass = '^8colorado^';
	$dbName = '1921110_blog';


	

	if($conn->connect_error){
		die("Connection failed: " . $conn -> $connection_error);
	}

	if(empty($_POST['firstName'])  ||   empty($_POST['lastName']) ||   empty($_POST['title']) || empty($_POST['content']) )
	{
	    $errors .= "\n Error: all fields are required";
	}

	
	$conn =  mysqli_connect($dbhost, $dbuser, $pass, $dbName);

	$image = $_FILES['imagefile']['tmp_name'];

	$name = $_FILES['imagefile']['name'];

	$image = base64_encode(file_get_contents(addslashes($image)));


	$firstName = mysqli_real_escape_string($conn, $_POST['firstName']);
	$lastName = mysqli_real_escape_string($conn, $_POST['lastName']);
	$title = mysqli_real_escape_string($conn, $_POST['title']);
	$content = mysqli_real_escape_string($conn, $_POST['content']);
	$imageData mysqli_real_escape_string($conn, $_POST['imageData']);

	

	if($conn->connect_error){
		die("Connection failed: " . $conn -> $connection_error);
	}

	if(empty($errors)){
		$sql = "INSERT INTO Content (firstName,lastName,title,content,imageData) VALUES ('$firstName','$lastName','$title','$content','$imageData')";

		if($conn->query($sql) === TRUE){
			//echo 'new record added';
			header('Location: http://nickshort.info/#/Blog');
			
		}else{
			echo "Error: " . $sql . $conn->error;
		}
	}else{
		echo $errors;
	}

	

	

	$conn->close();

	
	
	

?>
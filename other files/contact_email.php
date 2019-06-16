<?php 
	

	$errors = '';

	$myemail = 'nickshort474@gmail.com';
	
	if(empty(empty($_POST['name']) || empty($_POST['contact']) ||   empty($_POST['message']))
	{
	    $errors .= "\n Error: all fields are required";
	}

	
	$name = $_POST['name'];
	$message = $_POST['message']; 
	$contact = $_POST['contact']; 

	
	if(empty($errors))
	{
		
		$to = $myemail;

		$email_subject = "Contact form submission: $name \n";

		$email_body = "You have received a new message. \n".

		" Here are the details:\n Name: $name \n ".

		"Email: $contact\n Message \n $message;"

		//Headers
	
		$headers = "From: $myemail\n";

		$headers .= "Reply-To: $contact";

		if(mail($to,$email_subject,$email_body,$headers)){
			
			//redirect to the 'reponse' page
			header('Location: https://nickshort.info/#/Response');
		}else{
			echo "something went wrong boo";
		}

		

	}else{
		echo $errors;
	}
	

?>
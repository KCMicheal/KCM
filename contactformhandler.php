<?php
	$visitor_email = $_POST['staticEmail'];
	
	$email_from = 'egwunwokekc@gmail.com';

	$email_subject = "New Subscriber";

	$email_body = 
					"User Email: $visitor_email. \n";
						


	$to = "egwunwokekc@gmail.com";

	$headers = "From: $email_from \r\n";

	$headers = "Reply-To: $visitor_email\r\n";

	mail($to,$email_subject,$email_body,$headers);

	header (Location: index.php);

?>
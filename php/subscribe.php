<?php
$email = $_POST['staticEmail'];
$formcontent=" This is a new subscriber: $email \n";
$recipient = "egwunwokekc@gmail.com";
$subject = "A new Subscriber";
$mailheader = "From: $email";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='/php/index.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>

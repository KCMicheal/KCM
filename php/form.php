<?php
$error = ""; $successMessage = "";

if ($_POST) {
    
    if (!$_POST["email"]) {
        
        $error .= "An email address is required.<br>";
        
    }
    
    if (!$_POST["content"]) {
        
        $error .= "The message field is required.<br>";
        
    }
    
    if (!$_POST["subject"]) {
        
        $error .= "The subject is required.<br>";
        
    }
    
    if ($_POST['email'] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {
        
        $error .= "The email address is invalid.<br>";
        
    }
    
    if ($error != "") {
        
        $error = '<div class="alert alert-danger" role="alert"><p>There were error(s) in your form:</p>' . $error . '</div>';
        
    } else {
        
        $emailTo = "egwunwokekc@gmail.com";
        
        $subject = $_POST['subject'];
        
        $content = $_POST['content'];
        
        $headers = "From: ".$_POST['email'];
        
        if (mail($emailTo, $subject, $content, $headers)) {
            
            $successMessage = '<div class="alert alert-success" role="alert">Your message was sent, we\'ll get back to you ASAP!</div>';
            echo "Thank You!" . " -" . "<a href='/public_html/php/index.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
            
        } else {
            
            $error = '<div class="alert alert-danger" role="alert"><p><strong>Your message couldn\'t be sent - please try again later</div>';
            echo "Sorry, please try again!" . " -" . "<a href='/public_html/php/index.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
            
            
        }
        
    }
    
    
    
};
?>
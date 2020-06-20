<?php
      $error = ""; $successMessage = "";

      if ($_POST) {
          
          if (!$_POST["email"]) {
              
              $error .= "An email address is required.<br>";
  
          }
          
          if (!$_POST["textarea"]) {
              
              $error .= "The content field is required.<br>";
              
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
              
              $textarea = $_POST['textarea'];
              
              $headers = "From: ".$_POST['email'];
              
              if (mail($emailTo, $subject, $textarea, $headers)) {
  
                  $successMessage = '<div class="alert alert-success" role="alert">Your message was sent, we\'ll get back to you ASAP!</div>';
  
  
              } else {
  
                  $error = '<div class="alert alert-danger" role="alert"><p><strong>Your message couldn\'t be sent - please try again later</div>';
  
  
              }
  
          }
  
  
  
      }
  
 
?>
<!DOCTYPE html>
<html lang="en">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="bootstrap4/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Orion Cync Contact Form</title>

    <style>
        body {
            margin: 0 auto;
            padding: 0;
            text-align: center;
            color: white;
            background-image: url(dubai.jpg);
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
        .container {
            margin-top: 50px;
            width: 300px;
            margin-bottom: 30px;
        }

        .comp {
            background-color: #f3ec78;
            background-image: linear-gradient(50deg, #DE8312, #87F9FC);
            background-size: 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; 
            
        }
        

    </style>
  </head>
  <body>
  

  
    <div class="container">
    <h1 class="comp">Orion Cync</h1>
    <p><i>Welcome!.....</i></p><br>
    <h3>Get in touch with us!</h3>

    <div id="error"><? echo $error.$successMessage; ?></div>

          <form method="post">
        <div class="form-group row justify-content-center" >
          <div class="col">
            <label for="email">Email address</label>
          
          <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted" style="color:white !important;">We'll never share your email with anyone else.</small>
          </div>
        </div>
        <div class="form-group row justify-content-center">
          <div class="col">
            <label for="subject">Subject</label>
          <input type="text" name="subject" class="form-control" id="subject">
         </div>
        </div>
        <div class="form-group row justify-content-center">
         <div class="col">
        <label for="textarea">What would you like to ask us?</label>
          <textarea class="form-control" name="textarea" id="textarea" rows="3"></textarea>
        </div>
        </div>
        <button type="submit" class="btn btn-primary" id="submit">Submit</button>
      </form>
    </div>

   
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="bootstrap4/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

    <script type="text/javascript">
     $("form").submit(function(e) {

              var error = "";

              if ($("#email").val() == "") {

                  error += "The email field is required.<br>"

              }

              if ($("#subject").val() == "") {

                  error += "The subject field is required.<br>"

              }

              if ($("#textarea").val() == "") {

                  error += "The content field is required.<br>"

              }

              if (error != "") {

                 $("#error").html('<div class="alert alert-danger" role="alert"><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>');

                  return false;

              } else {

                  return true;

              }
          })
    
    
    </script>


  </body>
</html>

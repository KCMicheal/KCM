<?php
      $weather = "";
      $error = "";
      
      if ($_GET['city']) {
          
       $urlContents = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=".urlencode($_GET['city'])."&appid=cf6cd76dd706ff68238c2bcc3f56b3cd");
          
          $weatherArray = json_decode($urlContents, true);
          
          if ($weatherArray['cod'] == 200) {
          
              $weather = "The weather in ".$_GET['city']." is currently '".$weatherArray['weather'][0]['description']."'. ";
  
              $tempInCelcius = intval($weatherArray['main']['temp'] - 273);
  
              $weather .= " The temperature is ".$tempInCelcius."&deg;C and the wind speed is ".$weatherArray['wind']['speed']."m/s.";
              
          } else {
              
              $error = "Could not find city - please try again.";
              
          }
          
      }
  

?>
<!DOCTYPE html>
<html lang="en">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
 
    <title>Weather Scrapper</title>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
            background-image: url(burj.jpg);
            background-size: auto;
            background-repeat: no-repeat;
        }
        .container {
            text-align: center;
            margin-top: 25vh;
            color: whitesmoke;
            max-width: 500px;
        }
        input {
            margin: 20px 0px;
        }
        #weather {
            margin-top: 15px;
        }
        @media all and (max-width: 576px) {
            h1{
                text-transform: uppercase;
            }
        }

    </style>
  </head>

  <body>

  <div class="container col">
        <h1>What's the Weather</h1>

        <form>
            <div class="form-group">
                <label for="city">Enter the name of a city</label>
                <input type="text" id="city" class="form-control" value="<?php 
                
                if (array_key_exists('city', $_GET)) {
                    
                    echo $_GET['city'];
                }
                
                ?>" name="city" placeholder="E.g. Enugu, Lagos, Abuja">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>



        </form>

        <div id="weather"><?php 
        
            if ($weather) {

                echo '<div class="alert alert-success" role="alert">'.$weather.'</div>';
            } else if ($error) {

                echo '<div class="alert alert-danger" role="alert">'.$error.'</div>';
            }
        
        
        ?></div>



  </div>



    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

  </body>
</html>

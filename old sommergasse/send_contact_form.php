<?php

  define('SECRET_KEY', '6Lcp0NMUAAAAAMis6YuL65ByNCRbFrUue28pSlgd');

  if($_POST) {
    function getCaptcha($SecretKey) {
      $Response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".SECRET_KEY."&response={$SecretKey}");
      $Return = json_decode($Response, true);
      return $Return;
    }
    $arrResponse = getCaptcha($_POST['g-recaptcha-response']);

    if($arrResponse["success"] == false || $arrResponse["score"] < 0.5) {
      echo "You Sir, are a robot! ";
      return;
    }
  }

  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $start_date = $_POST['startdate'];
  $end_date = $_POST['enddate'];
  $info = $_POST['info'];

  function IsInjected($str) {
    $injections = array('(\n+)',
      '(\r+)',
      '(\t+)',
      '(%0A+)',
      '(%0D+)',
      '(%08+)',
      '(%09+)'
      );
    $inject = join('|', $injections);
    $inject = "/$inject/i";

    if(preg_match($inject,$str)) {
      return true;
    }
    else {
      return false;
    }
  }

  if(IsInjected($visitor_email)) {
    echo "Bad email value!";
    exit;
  }

  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }

  if(clean_string($name) == '' || clean_string($visitor_email) == '' || $start_date == '' || $end_date == '' || clean_string($info) == '') {
    echo "You Sir, are a robot! ";
    return;
  }


  $to = "mail@sommereck-weinheim.de";
  //$to = "timo.lubitz@gmail.com";
  $email_subject = "Neue Anfrage für das Sommereck";	
  $email_from = "mail@sommereck-weinheim.de";
  //$email_from = "timo.lubitz@gmail.com";
  $email_body = "Ihr habt eine neue Anfrage für das Sommereck erhalten!\r\n<br>";
  $email_body .= "Und zwar von ".clean_string($name).".\n<br>";
  $email_body .= "Emailadresse des Absenders: ".clean_string($visitor_email).".\n<br>";
  $email_body .= "Angefragtes Anreisedatum: $start_date.\n<br>";
  $email_body .= "Angefragtes Abreisedatum: $end_date.\n<br>";
  $email_body .= "Sonst noch was: ".clean_string($info).".\n<br>";
  
  
  $headers = "From:<$email_from> \r\n";
  $headers .= "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso 8859-1";
  $headers .= "Reply-To: $visitor_email \r\n";
  
  mail($to,$email_subject,$email_body,$headers,"-f$email_from");
  
  header('Location: thankyou.html');
  exit;
?>


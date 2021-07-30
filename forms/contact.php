<?php

  $receiving_email_address = 'semi.marathon.oran1@gmail.com';

 

  if(mail($receiving_email_address,  $_POST['email'], $_POST['message'])){
    echo 'Your mail has been sent successfully.';
} else{
    echo 'Unable to send email. Please try again.';
}
?>

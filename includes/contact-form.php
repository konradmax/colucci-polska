<?php
$to      = 'konradmax91@gmail.com';
$subject = 'subject';
$message = 'msg';
$headers = array(
    'From' => 'name',
    'Reply-To' => 'name',
    'X-Mailer' => 'PHP/' . phpversion()
);

mail($to, $subject, $message, $headers);
?>
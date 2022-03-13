<?php

  $to      = 'tiago.deas@usp.br';
  $subject = 'Cadastro Game Mania';
  $message = "Nome: ".$_POST['nome']."\r\nE-mail: ".$_POST['email']."\r\nSobrenome: "$_POST['sobrenome'].";
  $headers = 'From: contato@site.com.br' . "\r\n" .
'Reply-To: contato@site.com.br' . "\r\n" .
'X-Mailer: PHP/' . phpversion();
  mail($to, $subject, $message, $headers);

header("Location: http://www.site.com.br/obrigado.html");

die();
?>
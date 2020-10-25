<?php

use PHPMailer\PHPMailer\PHPMailer;

require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";

$mail = new PHPMailer;


$fio = $_POST["user_name"];
$email = $_POST["user_mail"];
$description = $_POST["user_description"];

mail('maksim_28_11_1999@mail.ru', 'fucking blyad po4ta', 'priwlo???');
// $mail->Host = 'smtp.yandex.ru';
// $mail->Port = 465;
// $mail->SMTPAuth = true;
// $mail->SMTPSecure = 'tls';

// $mail->Username = 'maksim-28-11-1999@yandex.ru';
// $mail->Password = 'Vfrcjy99';

// $mail->setFrom($email);
// $mail->addAddress('maksim_28_11_1999@mail.ru');
// $mail->addReplyTo($email);

// $mail->isHTML(true);
// $mail->Subject = 'Первое письмо на почту';
// $mail->Body = `
//   <h1 align = center>
//     Message from: name: {$fio} mail: {$email}
//   </h1>
  
//   <p>
//     {$description}
//   </p>`;

//   if (!$mail->send()) {
//     echo "
//     <h1 align = center>
//       Message from: name: {$fio} mail: {$email}
//     </h1>
    
//     <p>
//       {$description}
//     </p>";
//   } else {
//     echo "Объебос";
//   }


// $fio = htmlspecialchars($fio);
// $email = htmlspecialchars($email);
// $fio = urldecode($fio);
// $email = urldecode($email);
// $fio = trim($fio);
// $email = trim($email);
// echo $fio;
// echo "<br>";
// echo $email;
// if (mail("maksim_28_11_1999@mail.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: $email \r\n"))
//  {     echo "сообщение успешно отправлено";
// } else {
//     echo "при отправке сообщения возникли ошибки";
// }?>
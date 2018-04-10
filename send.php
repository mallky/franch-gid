<?php
if (isset($_POST['phone'])) {
    $to  = "makarkuz@yandex.ru";
    $subject = "Заказ звонка"; 
    $message = 'Телефон заказчика:'.$_POST['phone']; 
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";

    mail($to, $subject, $message, $headers);
}
?>
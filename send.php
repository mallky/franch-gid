<?php
if (isset($_POST['phone'])) {
    $to  = "makarkuz@yandex.ru";
    $subject = "Заказ звонка"; 
    $message = $_POST['email']
        ? 'Телефон заказчика:'.$_POST['phone'].'\n Email: '.$_POST['email']
        : 'Телефон заказчика:'.$_POST['phone'];
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";

    mail($to, $subject, $message, $headers);
}
?>
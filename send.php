<?php
if (isset($_POST['phone'])) {
    $to  = "matveev@gstamp.ru";
    $subject = isset($_POST['email']) ? "Заказ презентации и гарантий" : "Заказ звонка";
    $message = isset($_POST['email'])
        ? "Имя заказчика: ".$_POST['name']."<br/>Телефон заказчика: ".$_POST['phone']."<br/> Email: ".$_POST['email']
        : "Имя заказчика: ".$_POST['name']."<br/>Телефон заказчика: ".$_POST['phone'];
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";

    mail($to, $subject, $message, $headers);
}
?>
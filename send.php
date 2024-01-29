
<?php

$token = "6775023082:AAEXfmuHyc9okoy8-5qxw2gAk2y5bnYEYw4";

$chat_id = "170195649";

if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);
    $email = ($_POST['email']);
    $textarea = ($_POST['textarea']);

    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone,
        'Почта' => $email,
        'Текст' => $textarea
    );
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    if ($sendToTelegram) {
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }

    else {
        alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    }
}

?>

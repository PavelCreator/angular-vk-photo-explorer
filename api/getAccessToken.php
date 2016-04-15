<?php
    require_once 'config.php';
    $params = json_decode(trim(file_get_contents('php://input')), true);
    $url = 'https://oauth.vk.com/access_token'.
            '?client_id='.client_id.
            '&client_secret='.client_secret.
            '&redirect_uri='.$params['redirect_uri'].
            '&code='.$params['code'];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    $result = curl_exec($ch);
    curl_close($ch);

    echo $result;
?>
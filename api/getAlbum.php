<?php
    require_once 'config.php';
    $params = json_decode(trim(file_get_contents('php://input')), true);
    $url = 'https://api.vk.com/method/'.$params['methodName'].'?'.
	'owner_id='.$params['owner_id'].'&'.
	'album_id='.$params['album_id'].'&'.
	'photo_sizes='.$params['photo_sizes'].'&'.
	'access_token='.$params['access_token'];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    $result = curl_exec($ch);
    curl_close($ch);

    echo $result;
?>
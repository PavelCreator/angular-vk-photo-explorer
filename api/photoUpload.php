<?php

	$params = json_decode(trim(file_get_contents('php://input')), true);
	$target_url = $params['url'];
	
	$type = pathinfo($params['file_name'], PATHINFO_EXTENSION);
	
	define('UPLOAD_DIR', './');
    $file_path = UPLOAD_DIR . $params['file_name'];
	
	$data = 'data:image/'.$type.';base64,'.$params['file1'];
	$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data));
	file_put_contents($file_path, $data);
	
	$file_name_with_full_path = realpath($file_path);
	$post = array('file1'=>'@'.$file_name_with_full_path);
 
    $ch = curl_init();
	curl_setopt($ch, CURLOPT_URL,$target_url);
	curl_setopt($ch, CURLOPT_POST,1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
	$result=curl_exec ($ch);
	curl_close ($ch);
	echo $result;
	
	unlink($file_path);

?>
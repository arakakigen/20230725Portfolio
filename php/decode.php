<?php
    $myJSON = file_get_contents("ProductList.json");//jsonファイルを読み込む

    $temp_data = json_decode($myJSON);//jsonファイルをjson形式にする。
    
    echo json_encode($temp_data);//jsonファイルを出力する
?>
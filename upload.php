<?php
$uploads_dir = '.';
if(isset($_FILES["file"])){
    $tmp_name = $_FILES["file"]["tmp_name"];
    $name = $_FILES["file"]["name"];
    move_uploaded_file($tmp_name, "$uploads_dir/$name");
    echo('Saved '.$tmp_name. ' '. $name );
}else{
    echo('Something went wrong');
}
?>
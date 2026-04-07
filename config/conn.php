<?php
$local_hosts = ['127.0.0.1:3000', 'localhost:3000', '172.20.10.10:3000'];

if (in_array($_SERVER['HTTP_HOST'], $local_hosts)) {

    define('DB_HOST','localhost');
    define('DB_USER','root');
    define('DB_PASS','');
    define('db_name','eccom_air9_main');

} else {

    define('DB_HOST','sql100.infinityfree.com');
    define('DB_USER','if0_41601921');
    define('DB_PASS','5HOrwtvWX79B');
    define('db_name','if0_41601921_air9');

}

// Connect to MySQL server (no default DB yet)
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS);
$sql = "CREATE DATABASE IF NOT EXISTS ". db_name;
$conn->query($sql);
$conn->select_db(db_name);
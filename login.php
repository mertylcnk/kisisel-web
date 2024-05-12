<?php
ob_start();

$yourName = $_POST['yourName'];
$yourPassword = $_POST['yourPassword'];

$correct_username = "g211210002@sakarya.edu.tr";
$correct_password = "g211210002";

// Check if the input fields are empty
if (empty($yourName) || empty($yourPassword)) {
    echo "E-mail veya şifre boş olamaz. Lütfen tekrar deneyiniz. Giriş sayfasına yönlendiriliyorsunuz...";
    header("Refresh: 3; url=login.html");
    exit;
}

// If the inputs are not empty, proceed with login authentication
if ($yourName == $correct_username && $yourPassword == $correct_password) {
    echo "Hoşgeldiniz g211210002";
    exit;
} else {
    echo "E-mail veya şifre yanlış. Lütfen tekrar deneyiniz. Giriş sayfasına yönlendiriliyorsunuz...";
    header("Refresh: 3; url=login.html");
    exit;
}
?>

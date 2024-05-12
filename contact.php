<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $city = $_POST["city"];
    $state = $_POST["state"];
    $zip = $_POST["zip"];
    $address = $_POST["address"];
    $message = $_POST["message"];

    echo "Başarılı bir şekilde formu gönderdiniz.";
    echo "Form bilgileri:";
    header("Refresh: 3; url=index.html");

        print ( "<h2>" . $name . "</h2>");
        print ( "<h2>" . $surname . "</h2>");
        print ( "<h2>" . $email . "</h2>");
        print ( "<h2>" . $password . "</h2>");
        print ( "<h2>" . $city . "</h2>");
        print ( "<h2>" . $state . "</h2>");
        print ( "<h2>" . $zip . "</h2>");
        print ( "<h2>" . $address . "</h2>");
        print ( "<h2>" . $message . "</h2>");
}
?>

<?php

        $servername = "127.0.0.1";
        $user = "root";
        $password = "";
        $port = 3306;
        $dbname = "myTestDB";
        $tableName = "Workers";

        $firstname = $lastname = $birthday = $salary = "";

        $conn = new mysqli($servername, $user, $password, $dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
?>


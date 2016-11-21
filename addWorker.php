<?php

    require_once 'connect.php';
    try{      
        $isValid = true;
        $invalidMsgs = array();
        
        if (empty($_POST["name"])) {
            $isValid = false;
            $invalidMsgs['name'] = "Please type worker's first name";
        } else {
            $invalidMsgs['name'] = "";
            $firstname = $_POST['name'];
        }
        
        if (empty($_POST["surname"])) {
            $isValid = false;
            $invalidMsgs['lastname'] = "Please type worker's last name";
        } else {
            $invalidMsgs['lastname'] = "";
            $lastname = $_POST['surname'];
        }
        
        if (empty($_POST["birth"])) {
            $isValid = false;
            $invalidMsgs['birth'] = "Please type worker's birth date";
        } else {
            $invalidMsgs['birth'] = "";
            $birthday = $_POST['birth'];
            $dateTime = new DateTime($birthday);
            $formatted_birthday=date_format( $dateTime, 'Y-m-d');
        }
        
        if (empty($_POST["salary"])) {
            $isValid = false;
            $invalidMsgs['salary'] = "Please type worker's salary";
        } else {
            $invalidMsgs['salary'] = "";
            $salary = $_POST['salary'];
        }
        
        if($isValid){
            $insertsql = "INSERT INTO Workers (firstname, lastname, birthday, salary)
            VALUES ('$firstname', '$lastname', '$formatted_birthday', '$salary')";
            if ($conn->query($insertsql)) {
                $last_id = $conn->insert_id;
                echo json_encode(array('result' => true, 'id' => $last_id));
            } else {
                echo "Error: " . $insertsql  . $conn->error;
            }
        } else {
            echo json_encode(array('result' => false, 'invalid' => $invalidMsgs));
        }
    } catch (Exception $ex){
        echo json_encode(array('result' => false, 'msg' => $ex));
    }
?>
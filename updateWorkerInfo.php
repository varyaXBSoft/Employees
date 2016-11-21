<?php
    require_once 'connect.php';

    try{      
        $id = $_POST['id'];
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
            $updatesql = "UPDATE Workers SET firstname='$firstname', lastname='$lastname', birthday='$formatted_birthday', salary='$salary' WHERE id='$id'";
            if ($conn->query($updatesql)) {
                echo json_encode(array('result' => true));
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

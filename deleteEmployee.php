<?php

    require_once 'connect.php';
       
    if($_GET['id']){
        try {
            $id = $_GET['id'];
            $deletesql = "DELETE FROM Workers WHERE id=".$id;
            $result = $conn->query($deletesql);
        } catch (Exception $ex) {
            echo json_encode(array('result' => false, 'msg' => $ex));
        }
        
    } else {
        echo json_encode(array('result' => false, 'msg' => "No such method provided"));
    }

?>


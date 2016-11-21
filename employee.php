<?php
    require_once 'connect.php';
        
    if($_GET['id']){
        try{
            $id = $_GET['id'];
            $updatesql = "SELECT * FROM Workers WHERE id=".$id;
            $result = $conn->query($updatesql);
            echo json_encode(array('result'=>true, 'data' => $result->fetch_assoc()));
        } catch (Exception $ex) {
            echo json_encode(array('result' => false, 'msg' => $ex));
        }        
    } else {
        echo json_encode(array('result' => false, 'msg' => "No such method provided"));
    }
    
?>

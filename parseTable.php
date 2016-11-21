<?php
    require_once 'connect.php';
    
    $sql =  "SELECT id, firstname, lastname, DATE_FORMAT(birthday, '%d %b %Y'), salary FROM workers";

    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo "<tr id='".$row['id']."'>";
            foreach ($row as $cell) {
                if(array_search($cell, $row)!= 'id'){
                    if(array_search($cell, $row)!= 'salary'){
                        echo "<td>" . htmlspecialchars($cell) . "</td>";   
                    } else {
                        echo "<td>" . htmlspecialchars($cell) . " RUB</td>";
                    }
                }
            }
            echo "</tr>\n";
        }
    } 
    echo "\n</tbody></table>";
    
?>


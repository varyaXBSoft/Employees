<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Company employees information</title>
        <link rel="stylesheet" href="workersStyle.css"/>
        <script src = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src = "selection.js"></script>
        <script src ="deletion.js"></script>
        <script src ="insertion.js"></script>
        <script src ="edition.js"></script>
        <script src="sorting.js"></script>
    </head>
    <body>
        <?php require_once 'connect.php';  ?>
             
            <h1>Our employees:</h1>
            <table id="testtable">
                <thead>
                    <tr id="headerrow">
                        <th id="firstname"> First Name<span class="up"></span><span class="down"></span></th>
                        <th id="lastname"> Surname <span class="up"></span><span class="down"></span></th>
                        <th id="birthday"> Date of Birth <span class="up"></span><span class="down"></span></th>
                        <th id="salary"> Salary <span class="up"></span><span class="down"></span></th>
                    </tr>
                </thead>
                <tbody>
        
        <?php require 'parseTable.php'; ?>
                    
            <div id='popupAdd' hidden>
                <div id='addForm'>
                    <span class="close" id="closeAddPopup">x</span>
                    <h2> Add new worker </h2>
                    <form>
                        <label>First Name:</label> <input type='text' id="addname"><span id="add_inv_name" class='invalid'></span><br>
                        <label>Last Name:</label> <input type='text' id="addsurname"><span id="add_inv_lastname" class='invalid'></span><br>
                        <label>Date of birth:</label> <input type='date' id="addbirth"><span id="add_inv_birth" class='invalid'></span><br>
                        <label>Salary:</label> <input type='number' id="addsalary"><span id="add_inv_salary" class='invalid'></span><br>
                        <input type='submit' value='Add new worker' id='addNewButton'>
                    </form>
                </div>
            </div>
                
            <div id='popupEdit' hidden>
                <div id='editForm'>
                <span class="close" id="closeEditPopup">x</span>
                <h2> Edit employee information </h2>
                <form method='post'>
                    <label>First Name:</label> <input type='text' id='editfirstname'><span id="edit_inv_name" class='invalid'></span><br>
                    <label>Last Name:</label> <input type='text' id='editlastname'><span id="edit_inv_lastname" class='invalid'></span><br>
                    <label>Date of birth:</label> <input type='date' id='editbirthday'><span id="edit_inv_birth" class='invalid'></span><br>
                    <label>Salary:</label> <input type='number' id='editsalary'><span id="edit_inv_salary" class='invalid'></span><br>
                    <input type='submit' value='Edit information' id='editFormButton'>
                </form>
            </div>
            </div>
            
            <button type='button' onclick='addNewShow()'>Add</button>
            <button type='button' onclick='editSelected()'>Edit</button>
            <button type='button' onclick='deleteSelected()'>Remove</button>       
    </body>
</html>

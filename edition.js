    var workerId;
    
    function editInfoShow(){
        var editPopup = document.getElementById('popupEdit');
        editPopup.hidden = false;
        var closeSign = document.getElementById("closeEditPopup");

        closeSign.onclick = function() {
            editPopup.hidden = true;
        }

        window.onclick = function(event) {
            if (event.target == editPopup) {
                editPopup.hidden = true;
            }
        }
    }
 
    function editSelected(){
        $("tr").each(function() {             
            if($(this).hasClass('selected')){
                var id = $(this)[0].getAttribute('id');
                getRow(id);
            }           
        });
    }
    
    function getRow(id){
        $.ajax({
            url: "employee.php?id="+id,
            type: "get",     
            success: function (result){   
                result = JSON.parse(result);
                fillPopup(result.data);
                editInfoShow();
            },
            error: function(){
                showAlert('Something went wrong');
            }        
        });
    }
    
                
    function fillPopup (data) {
        workerId=data.id;
        $('#editfirstname').val(data.firstname);
        $('#editlastname').val(data.lastname);
        $('#editbirthday').val(data.birthday);
        $('#editsalary').val(data.salary);
        $('.invalid').addClass('hidden');
    }
    
    function formateDate(givenDate){
            var formated_date = new Date(givenDate);
            var date = formated_date.getDate();
            if(date<10){
                date = "0"+date;
            };
            var month = formated_date.getMonth();
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            month = months[month];
            var year = formated_date.getFullYear();
            var full_date = date+" "+month+" "+year;
            return full_date;
    }

    $(document).ready(function() {
        $("#editFormButton").click(function(ev){
            var data = {
                id: workerId,
                name: $('#editfirstname').val(),
                surname: $('#editlastname').val(),
                birth: $('#editbirthday').val(),
                salary: $('#editsalary').val()
            };
            $.ajax({
                url: "updateWorkerInfo.php",
                type: "post",
                data: data,
                success: function (result){
                    var res = JSON.parse(result);
                    if(res.result){
                        console.log("Item updated succesfully");
                        var editPopup = document.getElementById('popupEdit');
                        editPopup.hidden = true;
                        var date_formated = formateDate(data.birth);
                        var info = [data.name, data.surname, date_formated, data.salary+" RUB"];
                        var cells = $("#"+workerId).children();
                        for(var i=0; i<cells.length; i++){
                            cells[i].innerText=info[i];
                        };
                        $('th').children("span").removeClass('clicked');
                    } else if(!res.result && res.invalid){
                        for(var name in res.invalid){
                            var span = $("#edit_inv_"+name);
                            if(span.length){
                                span.removeClass('hidden');
                                span.text(res.invalid[name]);
                            }
                        }
                    }
                },
                error: function(){
                    showAlert('Something went wrong');
                }        
            }); 
            ev.preventDefault();
            return false;
        });
        
        $("table").delegate("tbody tr", "dblclick", function(){
            var id = this.id;
            getRow(id);
        });
    });



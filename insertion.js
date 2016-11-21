    function addNewShow(){
        var addPopup = document.getElementById('popupAdd');
        addPopup.hidden = false;
        $('.invalid').addClass('hidden');
        var closeSign = document.getElementById("closeAddPopup");
        
        closeSign.onclick = function() {
            addPopup.hidden = true;
            $('#addForm input:not(#addNewButton)').val("");
        }
        
        window.onclick = function(event) {
            if (event.target == addPopup) {
                addPopup.hidden = true;
            }
        }
    }
  
    function showAlert(msg) {
        alert(msg);
    }
    
    $(document).ready(function() {
        $("#addNewButton").click(function(ev){
            var data = {
                name: $('#addname').val(),
                surname: $('#addsurname').val(),
                birth: $('#addbirth').val(),
                salary: $('#addsalary').val()
            };
            $.ajax({
                url: "addWorker.php",
                type: "post",
                data: data,
                success: function (result){ 
                    var res = JSON.parse(result);
                    if(res.result){
                        console.log("Item added succesfully");
                        var addPopup = document.getElementById('popupAdd');
                        addPopup.hidden = true;
                        var date_formated = formateDate(data.birth);
                        var newRowContent = "<tr id="+res.id+"><td>"+data.name+"</td><td>"+data.surname+"</td><td>"+date_formated+"</td><td>" +data.salary+" RUB</td></tr>";
                        $(newRowContent).insertBefore("tbody tr:first-child");
                        $('th').children("span").removeClass('clicked');
                    } else if(!res.result && res.invalid){
                        for(var name in res.invalid){
                            var span = $("#add_inv_"+name);
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
    });

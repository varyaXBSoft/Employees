    
    function deleteSelected(){        
        $("tr").each(function() {            
            if($(this).hasClass('selected')){
                var confirmation = confirm("Are you sure you want to delete this information?");
                if(confirmation){
                    var id = $(this)[0].getAttribute('id');
                    deleteRow(id, $(this));
                } 
            }
        });       
    }
    
    function deleteRow(id, row){
        $.ajax({
            url: "deleteEmployee.php?id="+id,
            type: "get",     
            success: function (){   
                row.slideUp(300,function() {
                    row.remove();
                });
            },
            error: function(){
                showAlert('Something went wrong');
            }        
        });
    }
    
    $(document).ready(function() {
        $(document).on('keydown', function(ev){
            if(ev.keyCode == 46) {
                deleteSelected();
            }
        });
    });



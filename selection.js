    $(document).ready(function() {

        function getSelected(){
            var itemId;
            $("tr").each(function() {                              
                if($(this).hasClass('selected')){
                    itemId = $(this)[0].getAttribute('id');
                } 
            });
            if(itemId){
                return itemId;
            }
        }

        $("table").delegate( "tbody tr", "click", function(){
            $(this).toggleClass('selected').siblings().removeClass('selected');  
        });

        $(document).on('keydown', function(ev){           
            if(ev.keyCode === 38 || ev.keyCode === 40){
                var selectedItem = getSelected();
                var focusedRow;
                
                if(!selectedItem) {
                    focusedRow = $('tbody tr:first-child', '#testtable');
                } else {
                    focusedRow = $('#'+selectedItem);
                    focusedRow.toggleClass('selected');
                        if(ev.keyCode === 38) {
                            if(selectedItem == $('tbody tr:first-child', '#testtable')[0].id){
                                focusedRow = $('tr:last-child', '#testtable');   
                            } else {
                                focusedRow = focusedRow.prev('tbody tr');
                            }
                        } else if(ev.keyCode === 40) {
                            if(selectedItem == $('tr:last-child', '#testtable')[1].id){
                                focusedRow = $('tbody tr:first-child', '#testtable');                            
                            } else {
                                focusedRow = focusedRow.next('tr');
                            }                        
                        }
                }
                focusedRow.toggleClass('selected');
                $('#headerrow').removeClass('selected');
            }
        });   
    });




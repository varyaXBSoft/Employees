$(document).ready(function() {

    $('th').click(function(){
        if(!$(this).children(".down").hasClass('clicked') && !$(this).children(".up").hasClass('clicked')){
            $(this).children(".up").toggleClass('clicked');
            $(this).siblings().children().removeClass('clicked');
        } else {
            $(this).children(".up").toggleClass('clicked');
            $(this).children(".down").toggleClass('clicked');
        }
        if($(this).children(".up").hasClass('clicked')){
            this.asc = true;
        } else {
            this.asc = false;
        }
        
        var table = $(this).parents('table').eq(0);
        var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
        if (!this.asc){ 
            rows = rows.reverse();
        }
        for (var i = 0; i < rows.length; i++){
            table.append(rows[i]);
        }
    });
    
    function comparer(index) {
        return function(a, b) {
            var valA = getCellValue(a, index);
            var valB = getCellValue(b, index);
            if(index == 3){
                valA = parseInt(valA);
                valB = parseInt(valB);
            }
            if(index == 2){
                var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                
                var arr1 = valA.split(" ");
                var arr2 = valB.split(" ");
                
                var date1 = new Date( arr1[2], months.indexOf(arr1[1]), arr1[0]);
                var date2 = new Date( arr2[2], months.indexOf(arr2[1]), arr2[0]);
                
                valA = date1.getTime();
                valB = date2.getTime();
            }
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
        }
    }
    function getCellValue(row, index){ 
        return $(row).children('td').eq(index).html(); 
    }
    
});


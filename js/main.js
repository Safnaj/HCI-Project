//Check Room Validation

$(document).on("click","#submit",function(event){
    event.preventDefault();
    //alert("Ready"); 
    var result = isValidForm();
    if(result == true){
        alert ("Damn Ok");
    }       

});

function isValidForm(){
    if($("#adult").val() == "0") {
        $("#adult").addClass("border-danger");
        $("#adult_error").html("<span class='text-danger'>Please Choose Number of Adults</span>");
    }       
    if($("#child").val() == "0") {
        $("#child").addClass("border-danger");
        $("#child_error").html("<span class='text-danger'>Please Choose Number of Childs</span>");
    }    
    if($("#rooms").val() == "0") {
        $("#rooms").addClass("border-danger");
        $("#room_error").html("<span class='text-danger'>Please Choose Number of Rooms</span>");
    }    
    if($('#arrivalDate').val() == ""){
        $("#date1_error").addClass("border-danger");
        $("#date1_error").html("<span class='text-danger'>Please Choose Arrival Date</span>");
    }    
    if($('#depDate').val() == ""){
        $("#date2_error").addClass("border-danger");
        $("#date2_error").html("<span class='text-danger'>Please Choose Departure Date</span>");
    }       
    else{
        //Return Page
        window.location.href = "available.html";
       
        $("#adult_error").remove();
        $("#child_error").remove();
        $("#room_error").remove();
        $("#date1_error").remove();
        $("#date2_error").remove();

        //return true;
    }
}

function removeError(){

    if($("#adult").val() != "0") {        
        $("#adult_error").remove();
    }
    if($("#child").val() != "0") {        
        $("#child_error").remove();
    }
    if($("#rooms").val() != "0") {        
        $("#room_error").remove();
    }
    if($("#arrivalDate").val() != "") {        
        $("#date1_error").remove();
    }
    if($("#arrivalDate").val() != "") {        
        $("#date2_error").remove();
    }
    else{
        return true;
    }
}


    
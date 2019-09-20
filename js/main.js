//Check Room Validation

$(document).on("click","#submit",function(event){
    event.preventDefault();
    //alert("Ready");        
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
    if($('#datetimepicker11').val() == ""){
        $("#date1_error").addClass("border-danger");
        $("#date1_error").html("<span class='text-danger'>Please Choose Arrival Date</span>");
    }
    if($('#datetimepicker1').val() == ""){
        $("#date2_error").addClass("border-danger");
        $("#date2_error").html("<span class='text-danger'>Please Choose Departure Date</span>");
    }
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
    if($("#depDate").val() != "") {        
        $("#date2_error").remove();
    }
    else{
        alert("Ready");
        //window.location.href = "available.html";
    }

});
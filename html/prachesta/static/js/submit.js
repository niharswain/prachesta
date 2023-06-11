$('#contactForm').submit(function(event){
    event.preventDefault();
    //console.log("Form submitted") ;
    alert("FORM SUBMITTED");
});

function testing(){
    alert("TESTING NOW") ;
    $("#contactForm").submit(function( event ){
        alert("Handler for submit") ;
        event.preventDefault() ;
        
    });
}
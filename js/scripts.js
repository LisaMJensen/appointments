$(function(){
  $("form button").click(function(event){
     event.preventDefault();
      alert("Booking Successful!");
     $(".modal").show();
     //$(".modal .close").click();
  });
});

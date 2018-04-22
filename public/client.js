// client-side js
// run by the browser each time your view template is loaded

(function(){
  
  // Declare variables.
  var url_input   = $("#url-input"),
      shorten_btn = $("#shorten"),
      url = "";
  
  
  
  // Get url from input when shorten is clicked.
  shorten_btn.on("click", function() {
    
    console.log()
    
    if((url_input.val() !== "" &&
       url_input.val().substr(url_input.val().length - 3) == "com") && (
       url_input.val().substr(0, 3) == "www" ||
       url_input.val().substr(0, 4) == "http" ||
       url_input.val().substr(0, 5) == "https")) {
    
      url = url_input.val();
      
      $.ajax({
              type:    "POST",
              url:     '/short/link?' + $.param({url: url}),
              success: function(data) {
                      $("#cond").fadeIn(400);
                      setTimeout(function() {$("#cond").fadeOut(400)}, 400)              },
              error:   function(jqXHR, textStatus, errorThrown) {
                    alert("Error, status = " + textStatus + ", " +
                          "error thrown: " + errorThrown
                    );
              }
});
      
        
    
    } else {
      
      console.log("Please enter a valid url.")
      
    }
    
  
  })
})()
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
      
      $.post('/short/link?' + $.param({url: url}, function() {
        
      }))
      
        
    
    } else {
      
      console.log("Please enter a valid url.")
      
    }
    
  
  })
})()
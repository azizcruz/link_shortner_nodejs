// client-side js
// run by the browser each time your view template is loaded

(function(){
  
  // Declare variables.
  var url_input   = $("#url-input"),
      shorten_btn = $("#shorten"),
      url = "";
  
  // our default array of urls.
  const urls = {}
  
  // Get url from input when shorten is clicked.
  shorten_btn.on("click", function() {
  console.log(url_input.val().substr(0, 3))
    
    if(url_input.val() !== "" || 
       url_input.val().substr(0, 3) == "www" ||
       url_input.val().substr(0, 4) == "http" ||
       url_input.val().substr(0, 5) == "https") {
    
      url = url_input.val();
      
      console.log(url)
    
    } else {
      
      console.log("Please enter a valid url.")
      
    }
    
  
  })
})()
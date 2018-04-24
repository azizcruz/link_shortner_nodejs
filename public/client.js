// client-side js
// run by the browser each time your view template is loaded

(function(){
  
  // Declare variables.
  var url_input   = $("#url-input"),
      shorten_btn = $("#shorten"),
      url = "";
  
  
  Get request to get all shortened urls.
  $.ajax({
    type: "GET",
    url: "/links",
    success: function(data) {
      if(data.length > 0) {
       data.forEach((url) => {
              $("#links ul").append("- <a href=" + "/redirect/" + url["shortened_url"] + ">" + url["shortened_url"]  + "</a><br>")
            }) 
      } else {
        
      }
    }
  
  })
  
  // Get url from input when shorten is clicked.
  shorten_btn.on("click", function() {
    
    
    // Validate input and make sure its a url.
    if((url_input.val() !== "" &&
       url_input.val().substr(url_input.val().length - 3) == "com") && (
       url_input.val().substr(0, 3) == "www" ||
       url_input.val().substr(0, 4) == "http" ||
       url_input.val().substr(0, 5) == "https")) {
    
      url = url_input.val();
      
      // Send a post request to the server.
      $.ajax({
              type:    "POST",
              url:     '/short/link?' + $.param({url: url}),
              success: function(data) {
                      $("#cond").css("color", "#4caf50")
                      $("#cond").text("success");
                      $("#cond").fadeIn(400);
                
             
                
                      setTimeout(function() {$("#cond").fadeOut(400)}, 400)
                      
                         $("#links ul").append("- <a href=" + "/redirect/" + url + ">" + url + "</a><br>")
                      
                console.log(data)
                      
              },
              error:   function(jqXHR, textStatus, errorThrown) {
                    alert("Error, status = " + textStatus + ", " +
                          "error thrown: " + errorThrown
                    );
              }
});
      
        
    
    } else {
      
      $("#cond").css("color", "#ff5252")
      $("#cond").text("failed");
      $("#cond").fadeIn(400);
      setTimeout(function() {$("#cond").fadeOut(400)}, 400) 
      
    }
    
  
  })
})()
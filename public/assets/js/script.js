$(function() {
    console.log("in script");
    displayPage();
    setupEventHandlers();
  });
  
  function displayPage() {
    // Send the GET request.
    $.get("/api/burgers/").then(
      function(burgers) {
          console.log("in-burgers",burgers);
        renderTemplate({burgers: burgers});
      }
    );
  }
  
  function renderTemplate(data) {
    var source = $("#page-template").text();
    var template = Handlebars.compile(source);
    var html = template(data);
    $("#app").html(html);
  }
  
  function setupEventHandlers() {
    $(document).on("click", "eat-burger", function(event) {
      var id = $(this).data("id");
  
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(
        function() {
          console.log("Ate butger to");
          // Rerender the templates with the updated list
          displayPage();
        }
      );
    });
  
    $(document).on("submit", ".create-form", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCat = {
        name: $("#ca").val().trim(),
        // Get the sleepy value by finding an element with a "name" attribute equal to the string "sleepy" and is checked
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          // Rerender the templates with the updated list
          displayPage();
        }
      );
    });
  
    // $(document).on("click", ".delete-cat", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted cat", id);
    //       // Rerender the templates with the updated list
    //       displayPage();
    //     }
    //   );
    // });
  };
  
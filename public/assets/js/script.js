$(".change-devoured").on("click", function(event){
    event.preventDefault();
 var id = $(this).attr("data-id")
$.ajax({
    url:"/api/burgers/" + id  ,
    method: "PUT"
}).then(function(data){
    location.reload()
}).catch(function(error){
console.log(error)
});
})

$(".addBurger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = 
    {
      burger_name: $("#bu").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers/", {
     data: newBurger,
      type: "POST"
    }).then(function(data){
        location.reload()
    }).catch(function(error){
    console.log(error)
    });
  });
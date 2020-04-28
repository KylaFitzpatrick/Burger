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
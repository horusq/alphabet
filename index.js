
//click event listener
for (var i=0; i<$(".square").length; i++){

$(".square")[i].addEventListener("click", function(){

    this.style.color = "red";
});
}
$("document").keypress(function(event){

    redAnimation(event.key);
});

function redAnimation(key) {
    console.log()
}

//click event listener
var squareEvent = document.querySelectorAll(".square");
for (var i = 0; i < squareEvent.length; i++){

squareEvent[i].addEventListener("click", function(){
   var buttonClick = this.innerHTML;
       clickKeyFunction(buttonClick);
       AnimationEffect(buttonClick);
    });
} 

document.addEventListener("keypress", function(evt) {

    clickKeyFunction(evt.key);
    AnimationEffect(evt.key);
});

    function clickKeyFunction(key){
        //use this to make all keys lower case should find a way to join this and animation function
        var LowerCaseKey = key.toLowerCase();
        document.getElementsByClassName(key).innerHTML = LowerCaseKey;
        //this.innerHTML will grag whats inside the button if spaces are in it it wont grab event
   switch(LowerCaseKey){
       case"a":
        alert("a is for apple");
        break;
       case"b":
        alert("b is for boy");
        break;
        case"c":
        alert("c is for cat");
        break;
       case"d":
        alert("d is for dog");
        break;
       case"e":
        alert("e is for egg");
        break;
       case"f":
        alert("f is for frog");
        break;
        case"g":
        alert("g is for girl");
        break;
       case"h":
        alert("h is for hammer");
        break;
        case"i":
        alert("i is for igloo");
        break;
       case"j":
        alert("j is for jar");
        break;
        case"k":
        alert("k is for key");
        break;
       case"l":
        alert("l is for labtop");
        break;
        case"m":
        alert("m is for magnet");
        break;
       case"n":
        alert("n is for newspaper");
        break;
        case"o":
        alert("o is for octupus");
        break;
       case"p":
        alert("p is for plane");
        break;
        case"q":
        alert("q is for queen");
        break;
       case"r":
        alert("r is for radio");
        break;
        case"s":
        alert("s is for sun");
        break;
       case"t":
        alert("t is for tablet");
        break;
        case"u":
        alert("u is for umbrella");
        break;
       case"v":
        alert("v is for volcano");
        break;
        case"w":
        alert("w is for wallet");
        break;
       case"x":
        alert("x is for x-ray");
        break;
        case"y":
        alert("y is for yarn");
        break;
       case"z":
        alert("z is for zipper");
        break;
        default:
            alert(key);
   }
}
function AnimationEffect(currentKey) {
    //need to join to switch statement function 
    var lowerCaseKey = currentKey.toLowerCase();
        document.getElementsByClassName(currentKey).innerHTML = lowerCaseKey;
console.log(lowerCaseKey);
    var activeButton = document.querySelector("." + lowerCaseKey);
  
    activeButton.classList.add(lowerCaseKey+"Pressed");
    setTimeout(function(){
    activeButton.classList.remove(lowerCaseKey+"Pressed");
    },1000);
}


// document.querySelector("button").addEventListener("click",handle);
// function handle(){
// alert("Nitik");}
var length=document.querySelectorAll(".drum").length;
for(var i=0;i<length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var bt=this.innerHTML;
        gana(bt);
        an(bt);
    });
}






document.addEventListener("keypress",function(event){
    gana(event.key);
    an(event.key);
});



function gana(key){
    switch(key){
        case "w":
            var aud=new Audio("sounds/crash.mp3");
            aud.play();
            break;
            case"a":
            var aud = new Audio ("sounds/kick-bass.mp3") ;
            aud.play();
            break;
            case  "s":
                var aud = new Audio ( "sounds/snare.mp3 ") ;
                aud.play() ;
                break;
                case   "d":
                    var aud = new Audio ( "sounds/tom-1.mp3 ");
                    aud.play() ;
                    break;
                    case "j":
                        var aud = new Audio ( "sounds/tom-2.mp3 ") ;
                        aud.play() ;
                        break;
                        case "k":
                            var aud = new Audio ( "sounds/tom-3.mp3 ") ;
                            aud.play();
     break;
     case "l":
     var aud = new Audio ( "sounds/tom-4.mp3 ") ;
     aud.play () ;
     break;
     default: console.log("jio");
    
                    
                
    }

}
  
function an(key) {
    var activekey=document.querySelector("."+key);
    activekey.classList.add("pressed");
    setTimeout(function(){
        activekey.classList.remove("pressed");},100);
    }

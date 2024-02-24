var drum=document.querySelectorAll(".drum");
for(var i=0; i<drum.length;i++){
    drum[i].addEventListener("click",function (){
        makeSound(this.innerHTML);
        makeAnnimation(this.innerHTML)

        // okkkkkkkkkkkk
        // ....
    })
    document.addEventListener("keypress",function(event){
        makeSound(event.key);
        makeAnnimation(event.key);
    })
    function makeSound(i){
        switch (i) {
            case "w":
                var crash=new Audio('sounds/crash.mp3');
                crash.play();          
                break;
            case "a":
                var kick=new Audio('sounds/kick-bass.mp3');
                kick.play();  
                break;
            case "s":
                var snare=new Audio('sounds/snare.mp3');
                snare.play();  
                break;
            case "d":
                var tom1=new Audio('sounds/tom-1.mp3');
                tom1.play();  
                break;
            case "j":
                var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "k":
                var tom3=new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "l":
                var tom4=new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
        
            default:
                console.log(i);
                break;
        } 
    }

    function makeAnnimation(key){
        var a= document.querySelector("."+key);
        a.classList.add(".pressed");
        setTimeout(function(){
            a.classList.remove(".pressed");
        },100)
    }
    
}

let mode = document.querySelector("#mode");
let crr = "night";


mode.addEventListener('change', () =>{
    if(crr=="night")
        {
    alert("Turn on Light Mode");
    document.querySelector("body").style.backgroundColor = "rgb(184, 175, 175)";
    document.querySelector("body").style.color = "black";
    crr="light";
    }
    else{
        alert("Turn on Nigth Mode");
        document.querySelector("body").style.backgroundColor = "rgb(0,0,33)";
        crr="night";
    }


});

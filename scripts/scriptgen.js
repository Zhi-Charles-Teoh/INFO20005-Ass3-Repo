function hamReveal() {
    var x = document.getElementById("hamBlock");
    if(x.className === "h__ham-block") {
        x.className += " responsive";
    }
    
}

window.addEventListener('click', function(e) {
    if (!document.getElementById('hamBlock').contains(e.target) && (!document.getElementById('hamburger').contains(e.target))) {
        document.getElementById('hamBlock').className = "h__ham-block"; //the same code you've used to hide the menu
    } 
})
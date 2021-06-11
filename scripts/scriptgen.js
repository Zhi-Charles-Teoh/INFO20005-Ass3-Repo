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

function disableShipping() {
    var form = document.getElementById("form__shipping");
    var elements = form.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
        if (elements[i].disabled === true) {
            elements[i].disabled = false;
        } else {
            elements[i].disabled = true;
        }
    }
}
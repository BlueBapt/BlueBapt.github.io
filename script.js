document.getElementById("recherche").addEventListener("keypress", (e) => {
    if (e.code === "Enter"){
        var val=document.getElementById("recherche").value
        document.location.href="https://www.google.com/search?q="+val; 
    }
});

var coups=2
var fonct = function(e){
    var val=document.getElementById("pouf")
    val.firstChild.nextSibling.className= ("logo"+coups);
    coups++;
}

document.getElementById("pouf").addEventListener("click", fonct);



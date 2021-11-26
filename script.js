document.getElementById("recherche").addEventListener("keypress", (e) => {
    if (e.code === "Enter"){
        var val=document.getElementById("recherche").value
        document.location.href="https://www.google.com/search?q="+val; 
    }
});


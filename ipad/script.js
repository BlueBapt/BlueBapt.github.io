const sto = localStorage;

var file_names = sto.getItem("notes")
if(file_names==null){
    sto.setItem("notes",JSON.stringify([]))
}else{
    file_names=JSON.parse(file_names)
}


if(file_names != null){
    var select = document.getElementById("files")
    for(var i=0;i<file_names.length;i++){
        var option = document.createElement("option")
        option.setAttribute("value",file_names[i])
        option.innerText=file_names[i]
        select.appendChild(option)
    }
}

function save(){
    var name = prompt("Quel nom?");
    if(name==null){
        name="export";
    }
    if(!file_names.includes(name)){
        file_names.push(name)
        sto.setItem("notes",JSON.stringify(file_names))
        var select = document.getElementById("files")
        select.innerHTML=""
        for(var i=0;i<file_names.length;i++){
            var option = document.createElement("option")
            option.setAttribute("value",file_names[i])
            option.innerText=file_names[i]
            select.appendChild(option)
        }
    }
    sto.setItem("file-"+name,document.getElementById("content").value.trim())
}

function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].text;
}
  
document.getElementById("save")
      .addEventListener("click", function () {
            alert("avant")
            save()
            alert("apres")
      }, false);

document.getElementById("load")
      .addEventListener("click", function () {
            var text = getSelectedText('files')
            document.getElementById("content").value=sto.getItem("file-"+text)
      }, false);
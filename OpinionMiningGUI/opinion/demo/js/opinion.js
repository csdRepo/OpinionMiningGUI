function change(el){

    if(el.className == "btn btn-danger"){
        el.className = "btn btn-success";
    }
    else {
        el.className = "btn btn-danger";
    }

    if (el.innerHTML=='Negative'){
        el.innerHTML='Positive';
    }
    else if(el.innerHTML=='Positive'){
        el.innerHTML='Negative';
    }
    if (el.innerHTML=='Argumentative'){
        el.innerHTML='Non Argumentative';
    }
    else if(el.innerHTML=='Non Argumentative'){
        el.innerHTML='Argumentative';
    }
    if (el.innerHTML=='Suggestion'){
        el.innerHTML='Non Suggestion';
    }
    else if(el.innerHTML=='Non Suggestion'){
        el.innerHTML='Suggestion';
    }

}


function enableBTN(){

    var elements = document.getElementsByName("btn");
    for(var i=0; i<elements.length; i++) {
        elements[i].disabled = false;
    }

    document.getElementById('imp').style.display = "none";
    document.getElementById('sbmt').style.display = "";
}

function submitTrain() {
    alert("bravo malaka to ekanes SUBMIThgfhfghfg");
}

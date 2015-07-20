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

function show_sentences (response) {
	// body...
    // document.getElementById("sentences_show").removeChild(document.getElementById("sentence"));
	//kanei collapse
	while (document.contains(document.getElementById("sentence"))) {
            document.getElementById("sentence").remove();
	}
	document.getElementById('sentences_show').style.display="";
	obj = JSON.parse(response);
	var sentnces= obj.arguments.sentences.length;
	var sentiment= obj.opinion.sentiment;
    // an einai neutral to theorw oti einai neg  ?
	if(sentiment.search("\"label\": \"pos\"}")!= -1){
		document.getElementById('sentiment').className="btn btn-success";
		document.getElementById('sentiment').innerHTML="Positive";
	}


    for (var i=0; i<obj.arguments.sentences.length; i++){
		var arg_class= "btn btn-danger";
		var sugg_class= "btn btn-danger";
    	if (obj.arguments.sentences[i].s.search("yes")!=-1){

    		arg_class="btn btn-success";
    	}

    	if (obj.suggestions.sentences[i].s.search("yes")!= -1){
    		sugg_class="btn btn-success";
    	}
		var div = document.createElement('div');
		div.id='sentence';
		div.innerHTML= '<label>'+"sentence "+i+'</label>\
                                            <input class="form-control" disabled>\
                                            <p></p>\
                                            <button type="button" class="'+arg_class+'"name="btn" onclick="change(this)" disabled>Argumentative</button>\
                                            <button type="button" class="'+sugg_class+'"name="btn" onclick="change(this)" disabled>Suggestion</button>\
                                            <p></p>\
                                            </p>';
       document.getElementById('sentences_show').insertBefore(div,document.getElementById("imp"));
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



function requestFromServer() {

    console.log("in requestfromserver function...");

    var url = "http://localhost:8000/classify";
    var data = document.getElementById("textToSubmit").value;

    var xmlhttp;
    if (window.XMLHttpRequest){ // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else{ // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    var response;
    xmlhttp.onreadystatechange=function(){

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
        	response = xmlhttp.responseText;
        	obj = JSON.parse(response);
       	    document.getElementById("responseText").innerHTML= response;

       	    show_sentences(response);
        }

        // else{
        //     alert("An Error Happened!");
        // }
    }

    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Content-Type", "text/plain");
    xmlhttp.send(data);
}

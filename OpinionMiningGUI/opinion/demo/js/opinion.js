var saved_response;

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
    // if (el.innerHTML=='Argumentative'){
    //     el.innerHTML='Non Argumentative';
    // }
    // else if(el.innerHTML=='Non Argumentative'){
    //     el.innerHTML='Argumentative';
    // }
    // if (el.innerHTML=='Suggestion'){
    //     el.innerHTML='Non Suggestion';
    // }
    // else if(el.innerHTML=='Non Suggestion'){
    //     el.innerHTML='Suggestion';
    // }

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
	if(sentiment.search("\"label\": \"pos\"}")== -1){
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
		div.innerHTML= '<label>'+"Sentence "+ (i+1) + ":" +'</label>\
                                            <input class="form-control" value="'+obj.doc_sentences[i].s+'" disabled>\
                                            <p></p>\
                                            <button id="arg_bt_'+(i+1)+'" type="button" class="'+arg_class+'"name="btn" onclick="change(this)" disabled>Argumentative</button>\
                                            <button id="sugg_bt_'+(i+1)+'" type="button" class="'+sugg_class+'"name="btn" onclick="change(this)" disabled>Suggestion</button>\
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

function generateMessageForTrain(){

    console.log(saved_response);

    var json = JSON.parse(saved_response);

    for (var i=0; i<json.doc_sentences.length; i++){

        if(document.getElementById("arg_bt_"+(i+1)).className == "btn btn-success"){
            console.log(json.arguments.sentences[i].s);
            var str = json.arguments.sentences[i].s.replace("no", "yes");
            json.arguments.sentences[i].s = str;
            console.log(json.arguments.sentences[i].s);
        }
        else if(document.getElementById("arg_bt_"+(i+1)).className == "btn btn-danger"){
            console.log(json.arguments.sentences[i].s);
            var str = json.arguments.sentences[i].s.replace("yes", "no");
            json.arguments.sentences[i].s = str;
            console.log(json.arguments.sentences[i].s);
        }

        if(document.getElementById("sugg_bt_"+(i+1)).className == "btn btn-success"){
            console.log(json.suggestions.sentences[i].s);
            var str = json.suggestions.sentences[i].s.replace("no", "yes");
            json.suggestions.sentences[i].s = str;
            console.log(json.suggestions.sentences[i].s);
        }
        else if(document.getElementById("sugg_bt_"+(i+1)).className == "btn btn-danger"){
            console.log(json.suggestions.sentences[i].s);
            var str = json.suggestions.sentences[i].s.replace("yes", "no");
            json.suggestions.sentences[i].s = str;
            console.log(json.suggestions.sentences[i].s);
        }
    }
    saved_response = JSON.stringify(json);
}

function submitTrain() {
    console.log("in submitTrain function...");

    // var url = "http://83.212.97.174:8000/train";
    var url = "http://localhost:8000/train";

    generateMessageForTrain();

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

        }
    }

    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Content-Type", "text/plain");
    xmlhttp.send(saved_response);
}



function requestFromServer() {

    console.log("in requestfromserver function...");

    // var url = "http://83.212.97.174:8000/classify";
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

            saved_response = response;
       	    show_sentences(response);
        }
    }

    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Content-Type", "text/plain");
    xmlhttp.send(data);
}

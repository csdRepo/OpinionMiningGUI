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

	//kanei collapse
	document.getElementById('sentences_show').style.display="";
	obj = JSON.parse(response);
	var sentnces= obj.arguments.sentences.length;
	var sentiment= obj.opinion.sentiment;
<<<<<<< HEAD
    // an einai neutral to theorw oti einai neg  ? 
	if(sentiment.search("\"label\": \"pos\"}")!= -1){
		document.getElementById('sentiment').className="btn btn-success";	
	}
	
	// // document.getElementById("responseText").innerHTML=obj.arguments.sentences[0].s1;
	// // document.getElementById("responseText").innerHTML=obj.opinion.sentiment.search("\"label\": \"neutral\"}");
	// // var n=sentiment.search("\"label\": \"neutral\"}").localCompare("-1");
	
	// // search("\"label\": \"neutral\"}");
    for (var i=0; i<obj.arguments.sentences.length; i++){
        // document.getElementById("sentences_show").innerHTML = obj.arguments.sentences.length;
		// var s = "s"+1;
		var arg_class= "btn btn-danger";
		var sugg_class= "btn btn-danger";
		document.getElementById("responseText").innerHTML = obj.arguments.sentences[i].s;
		// ocument.getElementById("responseText").innerHTML = i;
    	if (obj.arguments.sentences[i].s.search("yes")!=-1){
=======
    // an einai neutral to theorw oti einai neg  ?
	if(sentiment.search("\"label\": \"pos\"}")!= -1){
		document.getElementById('sentiment').className="btn btn-success";
	}

	// // document.getElementById("responseText").innerHTML=obj.arguments.sentences[0].s1;
	// // document.getElementById("responseText").innerHTML=obj.opinion.sentiment.search("\"label\": \"neutral\"}");
	// // var n=sentiment.search("\"label\": \"neutral\"}").localCompare("-1");

	// // search("\"label\": \"neutral\"}");
    for (var i=1; i<=obj.arguments.sentences.length; ++i){
        // document.getElementById("sentences_show").innerHTML = obj.arguments.sentences.length;
		var s = "s"+1;
		var arg_class= "btn btn-danger";
		var sugg_class= "btn btn-danger";
		document.getElementById("responseText").innerHTML = obj.arguments.sentences[0].s;
    	if (obj.arguments.sentences[0].s1.search("yes")!=-1){
>>>>>>> 47872ee82be6c4b5b5085ae7fdcbb08a0b9d9580

    		arg_class="brn btn-success";
    	}

<<<<<<< HEAD
    	if (obj.suggestions.sentences[i].s.search("yes")!= -1){
=======
    	if (obj.suggestions.sentences[0].s1.search("yes")!= -1){
>>>>>>> 47872ee82be6c4b5b5085ae7fdcbb08a0b9d9580
    		sugg_class="btn btn-success";
    	}
		var div = document.createElement('div');
		// div.className='row';
<<<<<<< HEAD
		div.innerHTML= '<label>'+"sentence "+i+'</label>\
=======
		div.innerHTML= '<label>'+s+'</label>\
>>>>>>> 47872ee82be6c4b5b5085ae7fdcbb08a0b9d9580
                                            <input class="form-control" disabled>\
                                            <p></p>\
                                            <button type="button" class="'+arg_class+'" name="btn" onclick="change(this)" disabled>Argumentative</button>\
                                            <button type="button" class="'+sugg_class+'"name="btn" onclick="change(this)" disabled>Suggestion</button>\
                                            <p></p>\
                                            </p>';
<<<<<<< HEAD
       // document.getElementById("responseText").innerHTML = obj.arguments.sentences.length;
       document.getElementById('sentences_show').insertBefore(div,document.getElementById("imp"));
	}

												  
=======
       document.getElementById("responseText").innerHTML = obj.arguments.sentences.length;
       document.getElementById('sentences_show').insertBefore(div,document.getElementById("imp"));
	}


>>>>>>> 47872ee82be6c4b5b5085ae7fdcbb08a0b9d9580
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

        if (xmlhttp.status==200){
        	response = xmlhttp.responseText;
<<<<<<< HEAD
        	obj = JSON.parse(response);       			
       			
=======
        	obj = JSON.parse(response);

>>>>>>> 47872ee82be6c4b5b5085ae7fdcbb08a0b9d9580
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


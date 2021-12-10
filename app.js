var btnTranslate = document.querySelector("#btn-translate"); 
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var url = "	https://api.funtranslations.com/translate/minion.json";

function translationalURL(text)
{
    return url + "?text=" + text;
}


function handlingError(error)
{
    console.log("error occured: ", error);
    alert("server is down. Please try again after some time");
}

function clickHandler()
{
    fetch(translationalURL(txtInput.value))
    .then(response => response.json())
    //.then(json => console.log(json))
    .then(json => {outputDiv.innerText = json.contents.translated})
    .catch(handlingError)
}

btnTranslate.addEventListener("click", clickHandler());

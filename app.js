var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(text) {
    return (serverURL + "?text=" + text);
}

function errorHandler(error) {
    console.log("error occured");
    alert("something wrong! please try again later")
}

function clickHandler() {
    //outputDiv.innerText = "parul" + txtInput.value
    var inputText = txtInput.value;  // taking input
   fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json => {outputDiv.innerText = json.contents.translated})
   .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)


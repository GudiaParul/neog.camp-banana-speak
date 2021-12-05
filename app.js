var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text) {
    return serverURL + "text=" +text
}

function clickHandler() {
    //outputDiv.innerText = "parul" + txtInput.value
      var inputText = txtInput.value;  // taking input

   // calliong server for processing
   fetch(getTranslationURL(inputText))
   .then(response => response.json)
   .then(json => console.log(json))
};

btnTranslate.addEventListener("click", clickHandler)


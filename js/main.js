import Caesar from './caesar/index.js'

let ceasarEncodeButton = document.querySelector("#ceasarEncodeButton");
let ceasarDecodeButton = document.querySelector("#ceasarDecodeButton");

//Encoding
ceasarEncodeButton.addEventListener("click", function(){
    let caesarShift = document.querySelector("#caesarShift").value;
    let planText = document.querySelector("#caesarEncodePlainText").value;
    let encryptedText = document.querySelector("#caesarEncodeEncrypted");

    let caesar = new Caesar();
    let encodedMessage = caesar.encode(caesarShift, planText);
    encryptedText.value = encodedMessage;
})

// Decoding
ceasarDecodeButton.addEventListener("click", function(){
    let caesarShift = document.querySelector("#caesarShift").value;
    let encryptedText = document.querySelector("#caesarDecodeEncrypted").value;
    let planText = document.querySelector("#caesarDecodePlainText");

    let caesar = new Caesar();
    let decodedText = caesar.decode(caesarShift, encryptedText);
    planText.value = decodedText;
})

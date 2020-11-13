import Caesar from './caesar/index.js'
import Affine from './affine/index.js'

let caesarEncodeButton = document.querySelector("#caesarEncodeButton");
let caesarDecodeButton = document.querySelector("#caesarDecodeButton");


// Caesar Encoding
caesarEncodeButton && (caesarEncodeButton.addEventListener("click", function(){
    let caesarShift = document.querySelector("#caesarShift").value;
    let planText = document.querySelector("#caesarEncodePlainText").value;
    let encryptedText = document.querySelector("#caesarEncodeEncrypted");
    encryptedText.value = "";

    let caesar = new Caesar();
    let encodedMessage = caesar.encode(caesarShift, planText);
    encryptedText.value = encodedMessage;
}))

// Caesar Decoding
caesarDecodeButton && (caesarDecodeButton.addEventListener("click", function(){
    let caesarShift = document.querySelector("#caesarShift").value;
    let encryptedText = document.querySelector("#caesarDecodeEncrypted").value;
    let planText = document.querySelector("#caesarDecodePlainText");
    planText.value = "";

    let caesar = new Caesar();
    let decodedText = caesar.decode(caesarShift, encryptedText);
    planText.value = decodedText;
}))


let affineEncodeButton = document.querySelector("#affineEncodeButton");
let affineDecodeButton = document.querySelector("#affineDecodeButton");

// Affine Encoding
affineEncodeButton && (affineEncodeButton.addEventListener("click", function(){
    let slop = document.querySelector("#affineSlope").value;
    let intercept = document.querySelector("#affineIntercept").value;
    let planText = document.querySelector("#affineEncodePlainText").value;
    let encryptedText = document.querySelector("#affineEncodeEncrypted");
    encryptedText.value = "";

    let affine = new Affine();
    let encodedMessage = affine.encode(slop,intercept,planText);
    encryptedText.value = encodedMessage;
}))

// Affine Decoding
affineDecodeButton && (affineDecodeButton.addEventListener("click", function(){
    let slop = document.querySelector("#affineSlope").value;
    let intercept = document.querySelector("#affineIntercept").value;
    let encryptedText = document.querySelector("#affineDecodeEncrypted").value;
    let planText = document.querySelector("#affineDecodePlainText");
    planText.value = "";

    let affine = new Affine();
    let decodedText = affine.decode(slop,intercept, encryptedText);
    planText.value = decodedText;
}))

// let c = new Caesar();
// let t = c.decode(100000000,'iwnqb');
// console.log(t)
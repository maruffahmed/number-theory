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

// let a = new Affine();
// let t = a.decode(3,8,'ry');
// console.log(t)


// CoPrime check function
const areCoprimes = (num1, num2) => {
    const smaller = num1 > num2 ? num1 : num2;
    for(let ind = 2; ind < smaller; ind++){
        const condition1 = num1 % ind === 0;
        const condition2 = num2 % ind === 0;
        if(condition1 && condition2){
            return false;
        };
    };
    return true;
};

// Validating coPrime of 26
let affineSlope = document.querySelector("#affineSlope");
let errorMsg = document.querySelector("#error-msg");
affineSlope && (affineSlope.addEventListener('change', function(){
    let val = this.value;
    if(val < 1){
        errorMsg.innerHTML = "Slope must be greater than or equal to 1"
        affineEncodeButton.disabled = true;
        affineDecodeButton.disabled = true;
    }
    else if(!areCoprimes(val,26)){
        errorMsg.innerHTML = "Slope should be co-prime of 26"
        affineEncodeButton.disabled = true;
        affineDecodeButton.disabled = true;
    }
    else{
        errorMsg.innerHTML = "";
        affineEncodeButton.disabled = false;
        affineDecodeButton.disabled = false;
    }
}))

// validation of intercept
let affineIntercept = document.querySelector("#affineIntercept");
affineIntercept && (affineIntercept.addEventListener('change', function() {
    let val = this.value;
    if(val > 9007199254740991){
        errorMsg.innerHTML = "Intercept value must be less than 9007199254740991";
        affineEncodeButton.disabled = true;
        affineDecodeButton.disabled = true;
    }else{
        errorMsg.innerHTML = "";
        affineEncodeButton.disabled = false;
        affineDecodeButton.disabled = false;
    }
}))
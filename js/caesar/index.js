class Caesar{
    constructor(){
        this.plainText;
        this.encode;
        this.k = {
            a : 0,b : 1,c : 2,d : 3,e : 4,f : 5,g : 6,h : 7,i : 8,j : 9,k : 10,l : 11,m : 12,n : 13,o : 14,p : 15,q : 16,r : 17,s : 18,t : 19,u : 20,v : 21,w : 22,x : 23,y : 24,z : 25
        }
        this.x;
    }

    encode(x, text){
        // encode algorithm
        this.x = Number.parseInt(x);
        this.plainText = text.toLowerCase();
        let textSplit = this.plainText.split("");
        // X, from the letter
        let x_letter = textSplit.map(letter => this.k[letter]);
        // f(x) = x + k
        let Fx = x_letter.map(x_l => x_l + this.x);
        // n MOD 26
        let afterMod = Fx.map(fx => fx%26);
        // Encoded text
        this.encode = afterMod.map(item => Object.keys(this.k)[item]).join("");
        // return encoded text
        return this.encode;
    }

    decode(x,text){
        // decode algorithm
        this.x = Number.parseInt(x);
        this.encode = text.toLowerCase();
        let textSplit = this.encode.split("");
        // f(x), from the letter
        let Fx_letter = textSplit.map(letter => this.k[letter]);
        // X = f(x) - k
        let X = Fx_letter.map(Fx => Fx - this.x);
        // Add 26
        let afterAdd = X.map(item => item + 26);
        // n MOD 26
        let afterMod = afterAdd.map(item => item%26);
        // Decoded text
        this.planText = afterMod.map(item => Object.keys(this.k)[item]).join("");
        // return decoded text
        return this.planText;
    }
}

export default Caesar;
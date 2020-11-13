class Affine{
    constructor(){
        this.plainText;
        this.encode;
        this.k = {
            a : 0,b : 1,c : 2,d : 3,e : 4,f : 5,g : 6,h : 7,i : 8,j : 9,k : 10,l : 11,m : 12,n : 13,o : 14,p : 15,q : 16,r : 17,s : 18,t : 19,u : 20,v : 21,w : 22,x : 23,y : 24,z : 25
        }
        this.x;
        this.p;
        this.multiplier;
    }

    encode(p,x, text){
        // encode algorithm
        this.p = p;
        this.x = Number.parseInt(x);
        this.plainText = text.toLowerCase();
        let textSplit = this.plainText.split("");
        // X, from the letter
        let x_letter = textSplit.map(letter => this.k[letter]);
        // f(x) = px + k
        let Fx = x_letter.map(x_l => (this.p*x_l) + this.x);
        // n MOD 26
        let afterMod = Fx.map(fx => fx%26);
        // Encoded text
        this.encode = afterMod.map(item => Object.keys(this.k)[item]).join("");
        // return encoded text
        return this.encode;
    }

    decode(p,x,text){
        // decode algorithm
        this.p = Number.parseInt(p);
        this.x = Number.parseInt(x)%26;
        this.plainText = text.toLowerCase();
        let textSplit = this.plainText.split("");
        // f(x), from the letter
        let Fx_letter = textSplit.map(letter => this.k[letter]);
        // X = f(x) - k
        let X = Fx_letter.map(Fx => Fx - this.x);
        // Add 26
        let afterAdd = X.map(item => item + 26);
        // Calculate multiplier
        for(let i = 1; ; i++){
            this.multiplier = (26*i+1)/this.p;
            if(Number.isInteger(this.multiplier)){
                break;
            }
        }
        // Multiply by multiplier
        let afterMul = afterAdd.map(item => item*this.multiplier);
        // n MOD 26
        let afterMod = afterMul.map(item => item%26);
        // Decoded text
        this.planText = afterMod.map(item => Object.keys(this.k)[item]).join("");
        // return decoded text
        return this.planText;
    }
}

export default Affine
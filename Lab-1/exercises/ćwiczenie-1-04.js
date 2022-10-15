/**
 * Napisz skrypt, który generuje losowy łańcuch o długości z zmiennej length składający się ze znaków alfabetu a-z i cyfr.
 * Wygenerowany Łańcuch umieść w zmiennej randomString  
 */

let length = 5;
let randomString = '';
/*
    const alpha = Array.from(Array(26)).map((e, i) => i + 97);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    const numbers = Array.from(Array(10).keys());
    const randoms = [...numbers,...alphabet]
    function getRandom(){
        const randomNumber = Math.floor(Math.random() * randoms.length)
        return randoms[randomNumber]
    }
    for (let index = 0; index < length; index++) {
        randomString+=getRandom()
    }
*/



console.log(randomString);
/**
 * Napisz skrypt, który generuje losowy łańcuch o długości z zmiennej length składający się ze znaków alfabetu a-z i cyfr.
 * Wygenerowany Łańcuch umieść w zmiennej randomString  
 */

let length = 5;
let randomString = '';
/*
    const alpha = Array.from(Array(26)).map((e, i) => i + 97) //generacja 26 liczb i zwiększenie ich wartości o 97
    const alphabet = alpha.map((x) => String.fromCharCode(x)) // zmiana liczb z tablicy alpha na litery a-z
    const numbers = Array.from(Array(9).keys()) //generacja cyft
    const randoms = [...numbers,...alphabet] // połączenie 2 tablic w 1 za pomoca operatora (...)
    function getRandom(){
        const randomNumber = Math.floor(Math.random() * randoms.length)
        return randoms[randomNumber]
    } // funkcja generujaca losowe wartości z tablicy randoms
    for (let index = 0; index < length; index++) {
        randomString+=getRandom()
    }
*/



console.log(randomString);
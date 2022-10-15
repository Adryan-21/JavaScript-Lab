/**
 * Napisz skrypt, który oblicza promień koła na podstawie pola powierzchni w zmiennej area
 * Wynik zapisz do zmiennej łańuchowej radius z dwoma miejscami po przecinku.
 */
let area = 1;
let radius = '';
/*
    if(area>=0 && area !== NaN && area !== undefined){
        radius = (area / Math.PI).toFixed(2)
    }
*/
if(area>=0 && area !== NaN){
    radius = (area / Math.PI).toFixed(2)
}



console.log(radius)


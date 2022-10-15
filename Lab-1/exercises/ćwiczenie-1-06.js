/**
 * Napisz skrypt, który na podstawie zmiennych rectWidth i rectHeight stworzy łańcuch rectString zawierający pustą rankę o podanych wymiarach.
 * Ramka ma być zbudowana ze znaków w zmienej rectBorderSymbol.
 * Dodaj kod, który sprawdzi poprawność wszystkich zmiennych:
 * rectWidth i rectHeight - większe od -1 i mniejsze od 81
 * rectBorderSymbol - jeden dowolny znak oprócz znaków białych (spacja, tabulator, nowy wiersz itd.)
 * Dla przykładowych danych wyświetlenie rectString na konsoli powinno dać poniższy efekt:
 * #######
 * #     #
 * #     #
 * #     #
 * #######  
 * 
 */
let rectWidth = 7;
let rectHeight = 5;
let rectBorderSymbol = '#';
let rectString = '';
/*
    for (let index = 0; index < rectHeight; index++) {
        for (let j = 0; j < rectWidth; j++) {
            if(index === 0 | index === rectHeight-1){
                rectString+= rectBorderSymbol
            }else if(j===0 || j=== rectWidth-1){
                rectString+= rectBorderSymbol
            }else{
                rectString+=" "
            }
            
        }
        rectString+="\n"
    }
*/

console.log(rectString);
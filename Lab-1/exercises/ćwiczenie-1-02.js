/**
 * Napisz skrypt, który w łańcuchu triangle zawiera ciąg znaków '#' i '\n' tworzących kształ trójkąta o wysokości 
 * w zmiennej height. Po wyświetleniu na konsoli powinien zostać wyświetlony poniższy wzór liczba wierzy powinna odpowiadać 
 * zmiennej height:
 * #
 * ##
 * ###
 * ####
 * ##### 
 */
let height = 5;
let triangle = '';
/*
    if(height>0 && height !== NaN){
        for (let index = 0; index < height; index++) {
            for (let j = 0; j <= index; j++) {
                triangle+="#"
            }
            triangle+="\n"
        }
    }
*/
if(height>0 && height !== NaN){
    for (let index = 0; index < height; index++) {
        for (let j = 0; j <= index; j++) {
            triangle+="#"
        }
        triangle+="\n"
    }
}


console.log(triangle);
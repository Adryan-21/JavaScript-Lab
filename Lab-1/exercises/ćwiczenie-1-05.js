/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`. 
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */
let n = 36.6;
let m = 50;
let progressBar = ""
/*
    const procent = Math.floor((n/m)*100)
    progressBar+="|"
    for (let index = 0; index < 50; index++) {
        const p = Math.floor((index/50)*100)
        if(procent>=p){
            progressBar+="#"
        }else{
            progressBar+=" "
        }
        
    }
    progressBar+="|\n"
    for (let index = 0; index <= 50; index++) {
        if(index === 0){
            progressBar+="0 %"
        }else if(index === 25){
            progressBar+=`${procent} %`
        }else if(index === 43){
            progressBar+=  "100%"
        }else{
            progressBar+=" "
        }
    }
*/
    if(n<=m){
        const procent = Math.floor((n/m)*100)
        progressBar+="|"
        for (let index = 0; index < 50; index++) {
            const p = Math.floor((index/50)*100)
            if(procent>=p){
                progressBar+="#"
            }else{
                progressBar+=" "
            }
            
        }
        progressBar+="|\n"
        for (let index = 0; index <= 50; index++) {
            if(index === 0){
                progressBar+="0 %"
            }else if(index === 25){
                progressBar+=`${procent} %`
            }else if(index === 43){
                progressBar+=  "100%"
            }else{
                progressBar+=" "
            }
        }
    }

console.log(progressBar)
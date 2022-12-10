const head = document.getElementById("head");
//zawartość elementu
console.log("innerText: ", head.innerText);                         //tekstowa zawartość elementu
console.log("innerHTML:", head.innerHTML);                          //kod HTML wewnątrz elementu
console.log("textContent:", head.textContent);                      //zawartość tekstowa węzła
//klasy
console.log("classList:",head.classList);                           //live lista klas elementu
console.log("classList.contains:",head.classList.contains('red'));  //czy element posiada klasę o nazwie 'red'
console.log("classList.toggle:",head.classList.toggle('danger'));   //dodanie (jesli nie ma) lub usunięcie (jeśli jest) klasy 'danger'
head.classList.add('list');                                         //dodanie klasy
head.classList.remove('red');                                       //usunięcie klasy
//atrybuty
console.log("data-target attribute:",head.getAttribute('data-target'));  //odczyt wartości wybranego atrybutu: 'data-target'
console.log("id:", head.getAttribute('id'));                        //id to też atrybut
const inputTitle = document.getElementById("title");
console.log("toggleAttribute:", inputTitle.toggleAttribute('disabled')); //dodanie lub usunięcie atrybutu
console.log("removeAttribute:", inputTitle.removeAttribute('name'));//usunięcie atrybutu
console.log("setAttribute:", inputTitle.setAttribute('abc', '123'));//dodanie atrybutu o podanej wartość lub zamiana wartości
console.log("value:",inputTitle.value);                             //wartość pola elementu input
console.log("name:",inputTitle.name);                               //name elementu (nie tylko input)
console.log("type:",inputTitle.type);                               //typ elementu input
//testowanie
console.log("hasAttribute:", head.hasAttribute('accesskey'));
/**
 * Ćwiczenie 2
 * 1. Dodaj klasę `border` do elementu li z innerText 'Karolina'
 * 2. Odblokuj input o name 'title'
 * 3. Dodaj atrybut max elementu input o name 'year'
 * 4. Nadaj wartość atrybutu type pierwszemu przyciskowi na 'submit'
 * 5. Nadaj wartość atrybutu type drugiemu przyciskowi na 'reset'
 */

const liList = document.querySelectorAll("li")
for (const li of liList) {
    if (li.textContent.includes("Karolina")) {
        li.classList.add("border")
    }
}

const input_Title = document.querySelector('input#title')
input_Title.removeAttribute("disabled")

const input_Year = document.querySelector("input#year")
input_Year.setAttribute("max",2023)

const buttons = document.querySelectorAll("button")
buttons[0].type = "submit"
buttons[1].type = "reset"
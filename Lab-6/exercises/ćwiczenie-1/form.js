/**
 * Napisz skrypt wykonaującywalidację formularza z pliku `form.html` wg założeń:
 * - nie ma połączenia między Krakowem a Gdańskiem i między Gdańskiem a Poznaniem
 * - data w polu "start-date" nie może być wcześniejsza od bieżącej daty
 * - data w polu "end-date" musi być późniejsza od daty w "start-date"
 * Rozwiązanie proste polega na zablokowaniu wysłania formularza dla niepoprawnych danych np. gdy wybrano Kraków i Gdańsk lub 1.02.2023 i 1.02.2023,
 * po próbie wysłania z błędami należy użytkownikowi wyświetlić błędy w odpowiednich elementach <span> pod polami formularza.
 * Rozwiązanie zaawansowane polega na dynamicznych zmianach w formularzu (zmian atrybutów pól), aby użytkownik nie mógł wybrać
 * niepoprawnych danych.
 * Uwaga!
 * Nie można zmieniać pliku `form.html`!
 * Wskazówki
 * zdarzenie 'input' wywoływane jest, gdy użytkownik wybierze lub wpisze dane w polu formularza
 * zdarzenie 'change' wywoływane jest, gdy użytkownik tylko zmieni wartość w polu
 * funkcja obiektu zdarzenia anulująca normalny tryb obsługi zdarzenia to preventDefault(), ale nie blokuje propagacji
 * Informacje na temat walidacji fomrularzy w JS: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
 */

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const startCity = form.elements["start-location"].value.substring(1, 2);
  const endCity = form.elements["end-location"].value.substring(1, 2);
  const error = document.querySelectorAll("span.error");
  const disabledConnects = [
    ["2", "4"],
    ["4", "5"],
  ];
  let validate = true;
  if (startCity === endCity) {
    error[0].innerHTML = "Nie można wybrać tej samej lokalizacji";
    error[1].innerHTML = "Nie można wybrać tej samej lokalizacji";
    validate = false;
  } else if (disabledConnects.some((connect) => connect.includes(startCity) && connect.includes(endCity))) {
    error[0].innerHTML = "Nie ma połączenia między tymi miastami";
    error[1].innerHTML = "Nie ma połączenia między tymi miastami";
    validate = false;
  } else {
    error[0].innerHTML = "";
    error[1].innerHTML = "";
  }

  const startDate = form.elements["start-date"].value;
  const endDate = form.elements["end-date"].value;
  const today = new Date();
  const todayDate = today.toISOString().substring(0, 10);
  if (startDate == "" || endDate == "") {
    error[2].innerHTML = "Pole nie może być puste";
    error[3].innerHTML = "Pole nie może być puste";
    validate = false;
  } else if (startDate < todayDate) {
    error[2].innerHTML = "Data nie może być wcześniejsza od bieżącej daty";
    validate = false;
  } else if (startDate > endDate) {
    error[3].innerHTML = "Data nie może być wcześniejsza od daty w polu start-date";
    validate = false;
  } else if (startDate < endDate) {
    error[2].innerHTML = "";
    error[3].innerHTML = "";
  }
  if (validate) {
    form.submit();
    alert("Formularz został wysłany");
  }
});

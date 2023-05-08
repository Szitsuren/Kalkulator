//Wstawia liczbę
//Podmienia 0
//Max 18 liczb
const x = document.getElementById("pole");
const hist = document.getElementById("dzialanie");
const z = document.getElementById("historia");
let tablica = [];
var liczba = null;
var liczba2 = null;
var operator = null;
var wynik = null;

function kropka(){
    if(!x.innerHTML.includes('.')) {
        x.innerHTML += '.';
    }
}

function wstaw0(){
    if (x.innerHTML.length < 18) {
        if (x.innerHTML == 0){
            x.innerHTML = 0;
        } else if (x.innerHTML != 0) {
            x.innerHTML += 0;
        }
    }
}

function wstaw(y){
    if (x.innerHTML.length < 18) {
        if (x.innerHTML.charAt(x.innerHTML.length - 1) == '.'){
            x.innerHTML += y;
        } else if (x.innerHTML == 0){
            x.innerHTML = y;
        } else if (x.innerHTML != 0) {
            x.innerHTML += y;
        }
    }
}
//Usuwa 1 liczbę
//Ustawia 0 jeśli została ostatnia liczba
//Ustawia 0 jeśli ostatnia liczba jest ujemna
function usun(){
    if (x.innerHTML.length - 1 != 0) {
        y = x.innerHTML.substring(0, x.innerHTML.length - 1);
        if (y.charAt(0) == '-' & x.innerHTML.length == 2) {
            x.innerHTML = 0;
        } else {
            x.innerHTML = y;
        }
    }else if (x.innerHTML.length = 1) {
        x.innerHTML = 0;
    }
}
function czyszczenie(){
    x.innerHTML = 0;
    hist.innerHTML = 0;
    liczba = liczba2 = operator = null
}
//zmienia znak wartości
function ujemna(){
    x.innerHTML = -(x.innerHTML);
}

function dzialanie(op) {
    liczba = x.innerHTML;
    hist.innerHTML = x.innerHTML +` ${op} `;
    x.innerHTML = 0;
    operator = op;
}

function rownanie() {
    if (operator != null){
        liczba2 = x.innerHTML;
        wynik = hist.innerHTML += liczba2;
        if (operator == '/') { 
            x.innerHTML = (liczba / liczba2);
            console.log('dzielenie')
            liczba = liczba2 = operator = null
        } else if (operator == '*') {
            x.innerHTML = (liczba * liczba2);
            console.log(x.innerHTML);
            console.log('mnożenie')
            liczba = liczba2 = operator = null
        } else if (operator == '+') {
            x.innerHTML = (Number(liczba) + Number(liczba2));
            console.log(x.innerHTML);
            console.log('dodawanie')
            liczba = liczba2 = operator = null
        } else if (operator == '-') {
            x.innerHTML = (Number(liczba) - Number(liczba2));
            console.log(x.innerHTML);
            console.log('odejmowanie')
            liczba = liczba2 = operator = null
        } 
        if (tablica.length < 20) {
            wynik += ` = ${x.innerHTML}`;
            tablica.push(wynik);
            z.innerHTML = tablica.join('<br>');
            console.log('nigger')
        } else {
            tablica = [];
            tablica.push(wynik);
            z.innerHTML = tablica;
            console.log('sarnuch')
        }
    } else {
        console.log("Musisz wybrać co chcesz zrobić z tą liczbą!")
    }
}
function clearownik (){
    tablica = [];
    z.innerHTML = tablica;
}
function check(){
    console.log(liczba, operator, liczba2);
    console.log(wynik);
    console.log(tablica)
}

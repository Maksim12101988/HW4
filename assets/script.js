let count = 0;


function changedColor() {
    let el2 = document.getElementById("el1");
    // console.log(el2);
    el2.classList.add("ice");
    // el2.classList.remove("ice");
    if (count % 2 == 0) el2.classList.add('ice');
    else el2.classList.remove('ice')
    count++

}

let btn1 = document.getElementById("btn1");
console.log(btn1);


btn1.addEventListener('click', changedColor)

let ageString = prompt("Введите свой возраст:");
let age = parseInt(ageString);

switch (true) {
    case age >= 18:
        alert("Вы совершеннолетний, все можно!");
        break;
    case age <= 10:
        alert("Вам надо учить уроки!");
        break;
    case age >= 30:
        alert("Ложитесь спать, завтра на работу");
        break;
    default:
        alert("Мы не знаем что вам делать");
}





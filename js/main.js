let price = document.querySelector('.price');
let mounth = document.querySelector('.mounth');
let day = document.querySelector('.day');
let button = document.querySelector('.button');
let rez = document.querySelector('.rez');
let service = document.querySelector('.service');
let pr = 0;
let clear = document.querySelector('.clear');
let fio = document.querySelector('.fio');
let summaitog = document.querySelector('.summaitog');

mounth.onchange = function () {
    if (mounth.value == "Декабрь" || mounth.value == "Январь" || mounth.value == "Февраль") {
        price.value = '600';
    }
    else if (mounth.value == "Март" || mounth.value == "Апрель" || mounth.value == "Май") {
        price.value = '400';
    }
    else if (mounth.value == "Июнь" || mounth.value == "Июль" || mounth.value == "Август") {
        price.value = '300';
    }
    else if (mounth.value == "Сентябрь" || mounth.value == "Октябрь" || mounth.value == "Ноябрь") {
        price.value = '400';
    }
}

button.onclick = function () {

    if (fio.value == '' || day.value == '' || day.value > 31 || day.value < 1) {
        alert('Введите корректные данные!');
    }
    else {
        if (service.value == "Весёлый мяч") {
            pr = 2000;
        }
        else if (service.value == "Каляка маляка") {
            pr = 3000;
        }
        else if (service.value == "Вокал") {
            pr = 2500;
        }
        else {
            pr = 0;
        }
        rez.value = (+price.value) * +day.value + +pr; 
    }
}

clear.onclick = function () {
    rez.value = '';
    service.value = "Нет";
    mounth.value = "Январь";
    price.value = '600';
    fio.value = '';
    day.value = '';
    summaitog.classList.remove("is-open");
}

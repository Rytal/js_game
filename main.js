const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-kick2');
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbarHP: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charizard',
    defaultHP: 100,
    damageHP:100,
    elHP: document.getElementById('health-enemy'),
    elProgressbarHP: document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click', function(){
    console.log('kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});

$btn2.addEventListener('click', function(){
    console.log('kick2');
    changeHP(10, character);
    changeHP(10, enemy);
});

function init(){
    console.log('start game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person){
    renderHPlife(person);
    renderProgressbarHP(person);
}

function renderHPlife(person){
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person){
    person.elProgressbarHP.style.width = person.damageHP + '%'
}

function changeHP(count, person){
    if (person.damageHP <= count){
        person.damageHP = 0;
        alert(person.name + ' програв!');
        $btn.disabled = true;
        $btn2.disabled = true;
    } else{
        person.damageHP -= count;
    }

    renderHP(person);
}

function random(num){
    return Math.ceil(Math.random() * num);
}

init()
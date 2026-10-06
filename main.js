const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-kick2');
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbarHP: document.getElementById('progressbar-character'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPlife: renderHPlife,
    renderProgressbarHP: renderProgressbarHP,
}

const enemy = {
    name: 'Charizard',
    defaultHP: 100,
    damageHP:100,
    elHP: document.getElementById('health-enemy'),
    elProgressbarHP: document.getElementById('progressbar-enemy'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPlife: renderHPlife,
    renderProgressbarHP: renderProgressbarHP,
}

$btn.addEventListener('click', function(){
    console.log('kick');
    character.changeHP(random(20))
    enemy.changeHP(random(20))
});

$btn2.addEventListener('click', function(){
    console.log('kick2');
    character.changeHP(10)
    enemy.changeHP(10)
});

function init(){
    console.log('start game!');
    character.renderHP();
    enemy.renderHP();
}

function renderHP(){
    this.renderHPlife();
    this.renderProgressbarHP();
}

function renderHPlife(){
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP(){
    this.elProgressbarHP.style.width = this.damageHP + '%'
}

function changeHP(count){
    if (this.damageHP <= count){
        this.damageHP = 0;
        alert(this.name + ' програв!');
        $btn.disabled = true;
        $btn2.disabled = true;
    } else{
        this.damageHP -= count;
    }

    this.renderHP();
}

function random(num){
    return Math.ceil(Math.random() * num);
}

init()
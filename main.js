const [$btn, $btn2] = ['btn-kick', 'btn-kick2'].map(id => document.getElementById(id));
const $logs = document.getElementById('logs');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbarHP: document.getElementById('progressbar-character'),
    changeHP,
    renderHP,
    renderHPlife,
    renderProgressbarHP,
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbarHP: document.getElementById('progressbar-enemy'),
    changeHP,
    renderHP,
    renderHPlife,
    renderProgressbarHP,
};

function attack({ damageForCharacter, damageForEnemy }) {
    character.changeHP(damageForCharacter, damage =>
        addLog({ firstPerson: character, secondPerson: enemy, damage }));
    enemy.changeHP(damageForEnemy, damage =>
        addLog({ firstPerson: enemy, secondPerson: character, damage }));
}

$btn.addEventListener('click', () => {
    console.log('kick');
    attack({ damageForCharacter: random(20), damageForEnemy: random(20) });
});

$btn2.addEventListener('click', () => {
    console.log('kick2');
    attack({ damageForCharacter: 10, damageForEnemy: 10 });
});

function init() {
    console.log('start game!');
    const [firstFighter, secondFighter] = [character, enemy];
    firstFighter.renderHP();
    secondFighter.renderHP();
}

function renderHP() {
    this.renderHPlife();
    this.renderProgressbarHP();
}

function renderHPlife() {
    const { elHP, damageHP, defaultHP } = this;
    elHP.innerText = `${damageHP} / ${defaultHP}`;
}

function renderProgressbarHP() {
    const { elProgressbarHP, damageHP } = this;
    elProgressbarHP.style.width = `${damageHP}%`;
}

function changeHP(count, cb) {
    const { name, damageHP } = this;
    const lost = Math.min(count, damageHP);

    this.damageHP = damageHP - lost;
    this.renderHP();
    cb?.(lost);

    if (this.damageHP === 0) {
        [$btn, $btn2].forEach(button => button.disabled = true);
        setTimeout(() => alert(`${name} програв!`), 100);
    }
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function generateLog({
    firstPerson: { name: firstName, damageHP, defaultHP },
    secondPerson: { name: secondName },
    damage,
}) {
    const text = logs[random(logs.length) - 1]
        .replaceAll('[ПЕРСОНАЖ №1]', firstName)
        .replaceAll('[ПЕРСОНАЖ №2]', secondName);

    return `${text} -${damage}, [${damageHP}/${defaultHP}]`;
}

function addLog(logData) {
    const $p = document.createElement('p');
    $p.innerText = generateLog(logData);
    $logs.insertBefore($p, $logs.children[0]);
}

init();
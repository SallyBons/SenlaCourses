'use strict'
function Warrior(name) {
    this.name = name;
    this.hp = 100;

    this.strike = (enemyName, damage) => {
        let totalDamage = damage * 10;

        if (enemyName.hp < totalDamage) {
            enemyName.hp = 0;
        }

        if (enemyName.hp > 0)
            enemyName.hp = enemyName.hp - totalDamage;
    }
}
const orc = new Warrior('Orc');
const man = new Warrior('Man');

console.log(orc.hp);
man.strike(orc, 3);
console.log(orc.hp);
man.strike(orc, 3);
console.log(orc.hp);
man.strike(orc, 6);
console.log(orc.hp);
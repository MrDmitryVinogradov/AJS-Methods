export default class Character {
    constructor(name) {
        if (typeof name === 'string' && name.length > 2 && name.length < 10) {
            this.name = name;
        }
        else {
            throw new Error('Character name length must be 3-9 symbols');
        }
        this.health = 100;
        this.level = 1;
    }
    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100
        }
        else {
            throw new Error('This character is dead');
        }
    }
    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}
export class Person {

    constructor(name, surname, nickname) {
        this.name = name;
        this.surname = surname;
        this.nickname = nickname;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

    getNickname() {
        return this.nickname;
    }

}
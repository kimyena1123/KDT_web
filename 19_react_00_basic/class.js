//클래스
// = 객체를 생성하는 템플릿

//클래스: 붕어빵 틀
//객체: 붕어빵

class Cat{

    constructor(name, age){ //생성자
        this.name = name;
        this.age = age;
    }

    mew(){
        console.log('야옹');
    }

    eat(){
        console.log('밥먹자')
    }
}

class name extends Cat{
    constructor(name, age, color){
        super(name, age);
        this.color = color
    }

    mew(){
        return this.name + '는 야옹';
    }

    eat(){
        return this.name + "야 밥먹자";
    }
}

let cat1 = new name('나비', 1, 'yellow');
let cat2 = new Cat('냥이', 2);

// console.log(cat1.name);
// console.log(cat1.age);
console.log('cat1 >> ', cat1.color);
console.log('상속!!cat eat >> ', cat1.eat());



//연습
//person 클래스
// - 속성: 이름, 성별
// - 메서드: study()
// Person 클래스로 만들어진 객체
// -minji
// - minku

class Person{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }

    study(){
        return '공부하자';
    }
}

let minji = new Person('민지', '여자');
let minku = new Person('민규', '남자');

console.log('minji name>>', minji.name);
console.log('minji gender>> ', minji.gender);
console.log('minju name >> ', minku.name);
console.log('minku gender>> ', minku.gender);
console.log(minji.name + "야 " + minji.study());
console.log(minku.name + "야 " + minku.study());

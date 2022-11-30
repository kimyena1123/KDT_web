//구조 분해 할당

//1. 배열 구조 분해
// - 순서가 중요
// - 변수의 순서와 요소의 순서가 이치해야 한다.
// - 없는 값(선언해 주는 않은 변수)는 undefined.
// - 기본값 설정이 가능.
const lists = ['apple', 'grape'];
// const lists = ['apple', 'grape', [1, 2, 3]]; //2차원 배열
[item1, item2, item3 = 'banana'] = lists;

console.log('itme1: ', item1);
console.log('item2: ', item2);
console.log('item3: ', item3);
// console.log('item3: ', item3[1]); //2차원배열 보기


//Swap: 두 변수의 값 교환
let x = 1, y = 2;
[x, y] = [y, x];
console.log('x y : ', x, y); 


//2. 객체 구조 분해
// - 키 값과 변수명 일치해야 한다
// - 없는 키값을 변수로 받으면 undefined
const obj = {
    key1: 'one',
    key2: 'two',
};

const {key1, newKey1, key2, key3 = 'three'} = obj;
console.log(key1); //one
console.log(newKey1); //undefined
console.log(key2); //two
console.log(key3);

const {a, b} = {a: 10, b: 20};
console.log(a); //10 
console.log(b); //20


//배열 구조 분해 연습
const arr = ['a', 'b', 'c'];
const [one, two, three] = arr;
console.log('one >> ', one); //a 
console.log('one >> ', two); //b
console.log('one >> ', three); //c 

const [one2, two2, three2, four2 = "hello"] = arr;
console.log('one >> ', one2); //a 
console.log('one >> ', two2); //b
console.log('one >> ', three2); //c 
console.log('four >>  ', four2); //hello

//객체 구조 분해 연습
const tv = {
    name: 'samsung tv',
    price: 300,
    size: '76inch',
    store: 'samsung'
}

//[before]
console.log('tv.name>> ', tv.name);
console.log(tv.price);
console.log(tv.size);
console.log(tv.store);

console.log('tv["name"] >> ', tv['name']);
console.log(tv['price']);

//[after]
//key: 변수명 -> 새로운 변수며을 '키'로 사용
//key = "value" -> 새로운 카에 대한 값을 설정
let {name, price: pricePrice, size, store, owner = 'yena'} = tv;
console.log('name> >', name);
console.log('price >> ', pricePrice);
console.log('size>> ', size);
console.log('store >> ', store);
console.log('oner>> ', owner);


//spread 연산자
//: 값을 펼치는 연산자 

//object
const defaultInfo = {
    price: 2000,
    sotre: 'cu',
}
const chocoicecream = {
    ...defaultInfo,
    flavor: 'choco',
    
};

const strawberryIcecream = {
    ...defaultInfo,
    flavor: 'strawberry',
}

const mangoIcecream = {
    flavor: 'mango',
    ...defaultInfo,
}

console.log(chocoicecream)
console.log(strawberryIcecream)
console.log(mangoIcecream)


//array
const nums1 = ['one', 'two', 'three']
const nums2 = ['four', 'five', 'six']

const nums = [...nums1, ...nums2, 'seven'];
console.log('nums >> ', nums);
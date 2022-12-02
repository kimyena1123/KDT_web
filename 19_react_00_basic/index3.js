// map()

const list = ['a', 'b', 'c', 'd', 'e'];

for(let i = 0; i < list.length; i++){
    console.log(list[i]);
}

//txt: 원소 값
//idx: 인덱스 값
//arr: 현재 반복을 돌고 있는 배열(배열 전체)
console.log('------------');
list.map((txt, idx, arr) => {
    console.log(txt, idx, arr);
})



//filter()
//true: 요소 유지 / false: 요소 버림 -> '새로운 배열'
const words = ['dog', 'cat', 'rabbit', 'apple', 'wow'];
let results = words.filter((word) => word.length > 3);
console.log(results);


//글자에 'a' 포함 필터링
let results2 = words.filter((word) => {
    return word.includes('a');
});

console.log(results2);

//ex)
console.log('abc'.includes('a')); // true
console.log('abc'.includes('x')); // false


//##############################

const nums = [1, 2, 3, 4, 5];
const newNums = nums.map((num) => num * 3); // 3 6 9 12 15
console.log(newNums);

console.log('newNums.includes(3)', newNums.includes(3)); //true
console.log(newNums.includes(4)); //false
console.log(newNums.indexOf(9)); // indexOf : 원소의 위치값(인덱스)

const arr1 = [
    {name: 'a', id : 1},
    {name: 'b', id : 2},
    {name: 'c', id : 3},
];

const arr2 = [
    {name: 'f', id : 4},
    {name: 'e', id : 5},
    {name: 'f', id : 6},
]

console.log('arr: >  ', arr1.concat(arr2));

/*
arr: >   [
  { name: 'a', id: 1 },
  { name: 'b', id: 2 },
  { name: 'c', id: 3 },
  { name: 'f', id: 4 },
  { name: 'e', id: 5 },
  { name: 'f', id: 6 }
]
*/
// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];
// Index position

const fruits =['사과','바나난'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); //밖의 인덱스 
console.log(fruits[fruits.length-1]); //배열의 끝 출력

// 3. Looping over an array
console.clear();
// a.for
for(let i = 0;i<=fruits.length-1;i++){
    console.log(fruits[i]);
}

// b.for of
for(let fruit of fruits){
    console.log(fruit);
}

// c.forEach
fruits.forEach(function(fruits,Index){
    console.log(fruits,Index)
})
// 4. Addtion, deletion, copy
//push: add an item to the end
//데이터를 뒤에 추가
fruits.push('복숭아','수박');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
fruits.unshift('수박','돌리');
console.log(fruits);

//shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);
// splice: remove an item by index position
fruits.push('스타','롤리','도리');
console.log(fruits);
fruits.splice(1,2);
console.log(fruits);


const fruit2=['응애','응에'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);


//5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과')); //위치알랴줌
console.log(fruits.includes('롤리'));//있기유무

//lastIndexOf
console.log(fruits.lastIndexOf("도리"));
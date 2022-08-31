const obj1 ={};
const obj2 = new Object();
console.log("응애");
// const aron = {name1:'aron',age:4};
 
// //오브젝트 = 키+값의 집합체
// print(name1,age);
// function print(Person){
//     console.log(Person.name1);
//     console.log(person.age);
// }


// print(aron); 

// //2.Computed properties
// console.log(aron.name1);
// console.log(aron['aron']);
 
// function printValue(obj,key){
//     console.log(obj[key]);
// }
// printValue(aron,'name1'); 

// //6. for..in vs for..of
// //for (key in obj)
// for(key in aron){
//     console.log(key);
// }

// for(value of iterable)
const array=[1,2,4,5];
for(value of array){
    console.log(value);
}

// 7. Fun cloning
//Object.assign(data,[obj1,obj2,obj3...])
const user = {name:'aron',age:'20'};
const user2 = user;
//  user에 들어있는 것이 user2에 똑같이 들어감
user2.name = 'coder';
console.log(user);
// user와user2가 가리키고있는 오브젝트가 같기때문에 
// user2가 변해도 같이변함

//old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({},user);
console.log(user4);

//anoter example
const fruit1={color:'red'};
const fruit2={color:'blue',size:'big'};
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed.color);
console.log(mixed.size);
// const inforUser={
//     fullname:"Hoàng Tuấn Dũng",
//     age:21,
//     phone :"0911892004"
// }
// console.log( typeof inforUser.fullname);
// //truy cập trực tiếp lấy được
// console.log(inforUser.fullname);


//for in duyệt qua từng key của object 
// lần lượt các key là "fullname","age","phone"-> gián tiếp và thuộc tính nằm trong biến -> dùng []
// for(let key in inforUser){
//    console.log(inforUser[key]);
// }


//nếu dùng for in cho mảng -> nó duyệt qua index , do đó nếu muốn duyệt từng phần tử mảng -> dùng for of
// let a=[1,2,3,4];
// for(let item in a){
//     console.log(item);
// }
//for of
// for(let ok of a){
//     console.log(ok);
// }

//1.var

//có phạm vi hàm (có phạm vi cả phàm kể cả khai báo ở các khối block)

// function testVar() {
//     if (true) {
//         var a = 10;
//         console.log(`A đang trong block giá trị là ${a}`);
//     }
//     console.log(`A đang ngoài block có giá trị là ${a}`);
// }
//js hiểu 
/*
function testVar(){
    var a;
    if(true){
        a=10;
        console.log(`A đang trong block giá trị là ${a}`);
    }
    console.log(`A đang ngoài block có giá trị là ${a}`);
}
*/

//có tính hoisting

// testVar();
// console.log(`A có giá trị là ${a}`);
// var a=10;
//js hiểu
/*
var a;
console.log(`A có giá trị là ${a}`);
a=10;
*/

//có thể ghi đè khai báo
// var a=10;
// var a=20;
// console.log(a);

//let, const

//let, const có phạm vi block khai báo

// function testVar() {
//     if (true) {
//         // let a = 10;/ chỉ có phạm vi block
//         // const a=10; chỉ có phạm vi block
//         console.log(`A đang trong block giá trị là ${a}`);
//     }
//     // ngoài block
//     console.log(`A đang ngoài block có giá trị là ${a}`);
// }
// testVar();

//let và const có tính hoisting nhưng nằm trong temperal dead zone nên k dùng được

//let cho gán giá trị còn const ko
// let a=10;
// a=30;
// console.log(a);

// const a=10;
// a=20;
// console.log(a);


//declearation function, expression function  có argument, arrow thì k có
//argument là đối tượng đặc biệt , nó chứa danh sách toàn bộ tham số truyền vào hàm 
function declerationFunction() {
    let sum = 0;
    for (let i of arguments) { // argument chứa toàn bộ dsach các giá trị tham số truyền vào
        sum += i;
    }
    return sum;
}
console.log(
    declerationFunction(1, 2, 3, 4, 5) // lúc này đối tượng argument sẽ chứa dsach các ptu truyền vào (1,2,3,4,5)
);

function ExpressFunction() {
    let sum = 0;
    for (let i of arguments) { // argument chứa toàn bộ dsach các giá trị tham số truyền vào
        sum += i;
    }
    return sum;
}
console.log(ExpressFunction(9,9,9,9,9));

//declearation function có tính hoisting tính hoisting (gọi hàm trước khi khai báo): 
hoisteddeclearation();
hoisteddeExpression();// expressionFunction ko có tính hoisting

function hoisteddeclearation(){
    console.log("có hoisting");
}

let hoisteddeExpression= function(){
    console.log("có hoisting");
}

//arrowfunciton

let sum=()=>{
    console.log("Arrow function");
}
sum();






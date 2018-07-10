//myNum = 5;
var myNum: number = 5;
//myString = "Hello Universe";'
var myString: string  = "Hello Universe";
//myArr = [1,2,3,4]
var myArr: = number[1,2,3,4];
//myObj = { name:'Bill'};
myObj = { name:'Bill'};
const myObj = { name:'Bill'};
//anythingVariable = "Hey";
var anythingVariable: anything = "Hey";
//anythingVariable = 25; 
var anythingVariable: anything = 25; 
//arrayOne = [true, false, true, true]; 
var arrayOne: boolean = [true, false, true, true]; 
arrayTwo = [1, 'abc', true, 2];
var arrayTwo: [number,string,boolean,number] = [1, 'abc', true, 2];


//myObj = { x: 5, y: 10 };
const myObj = { x: 5, y: 10 };
// object constructor
/* MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}()); 
*/
class MyNode {
    val:number;
constructor(val: number){
        this.val = 0;
        this.val = val;
    }
doSomething(){
        this._priv = 10;
    }


}

let myNodeInstance = new MyNode(1);

console.log(myNodeInstance.val);

//function myFunction() {
//    console.log("Hello World");
//    return;
//}
function myFunction(): void {
        console.log("Hello World");
        return;
}

//function sendingErrors() {
//	throw new Error('Error message');
//}
function sendingErrors(): never {
  throw new Error('Error message');
 }
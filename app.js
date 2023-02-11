var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
// const numResult:number[] = [];// shorter form of Array
var numResult = []; // longer form Array is outer type
var textResult = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
// function printResult(resultObj: Result){
//     console.log(resultObj.val);
// }
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    console.log(result);
    numResult.push(result);
    var stringResult = add(num1, num2);
    console.log(stringResult);
    textResult.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResult, textResult);
});
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('It worked');
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result.split('w'));
});

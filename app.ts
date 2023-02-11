const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

// const numResult:number[] = [];// shorter form of Array
const numResult:Array<number> = [];// longer form Array is outer type
const textResult:string[] = [];

type NumOrString = number | string
type Result = {val: number; timestamp: Date };

interface ResultObj {
    val: number;
    timestamp:Date;
}

function add(num1: NumOrString , num2: NumOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    } if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1+' '+num2;
    }
    return +num1 + +num2;
}

// function printResult(resultObj: Result){
//     console.log(resultObj.val);
// }

function printResult(resultObj: ResultObj){
    console.log(resultObj.val);
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1,+num2);
    console.log(result);
    numResult.push(result as number);
    const stringResult = add(num1, num2);
    console.log(stringResult);
    textResult.push(stringResult as string);
    printResult({val: result as number, timestamp: new Date() });
    console.log(numResult,textResult);
});

// promise is Generic type which interacts with another type
const myPromise = new Promise<string>((resolve,reject) => {
    setTimeout(() => {
        resolve('It worked');
    }, 1000)
});

myPromise.then((result) =>{
    console.log(result.split('w'));
})
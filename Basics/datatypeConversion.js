let age="22"
let score="33qbcd"
let name="sunnil"
//Converting into number
let valueInNumber=Number(age)
console.log(valueInNumber)
let ageInNumber=Number(score)
console.log(ageInNumber)
let nameInNumber=Number(name)
console.log(nameInNumber)

/*
"22"=>22
"33qbcd"=>NaN
"sunnil"=>NaN
"true/false"=>0/1
*/

let number=1 //=>True
let inBoolean=Boolean(number)
console.log(inBoolean)

let number2=0 //=>False
let inBoolean2=Boolean(number2)
console.log(inBoolean2)

let string="" //=>False
let inBoolean3=Boolean(string)
console.log(inBoolean3)

let string2="sunil" //=>True
let inBoolean4=Boolean(string2)
console.log(inBoolean4)

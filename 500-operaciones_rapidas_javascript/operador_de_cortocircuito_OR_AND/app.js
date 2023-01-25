/* 

OR ||
Si el valor de la izquierda es true, ese es el vaor que se va a cargar
*/

/* ej */

/* Antes no se podia usar un valor por defecto  name = "None"*/

const sayName = (name = "None") => console.log(`Hey ${name}`)

/* Para hacer esta funcionalidad se usaba el operador OR || */

const sayFruit = (fruit) => {
    fruit = fruit || "Default fruit" 

    return fruit
}

/* console.log(sayFruit()) */

/* 

AND &&
Si el valor de la izquierda es false, ese es el vaor que se va a cargar
en palabras simples es lo contrario de OR
*/

const sayHi = (value) => {
    value = value && "Hi"

    return value
}

console.log(sayHi(false))
console.log(sayHi(true))


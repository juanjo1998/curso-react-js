/* PARAMETROS REST (Es una forma de agregar virtualmente parametros infinitos, a una funcion o dentro de una variable)*/

function sumar(a,b,...c){
    console.log("Spread operator");

    console.log(a)
    console.log(b)

    c.forEach(el => {
        console.log(el)
    })

    console.log(c)
}

/* sumar(10,20,2,5,6) */

/* SPREAD OPERATOR */

const arr = [1,2,3,4,5],
arr2 = [6,7,8,9,10]

const res = [...arr,...arr2]
console.log(res)

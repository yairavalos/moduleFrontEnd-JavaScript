/**
 * Ejercicio
 * Simular el funcionamiento de un cajero
 * 
 * considerar estas acciones
 * 1. Retiro de efectivo (cantidad)
 * 2. Depósito (cantidad)
 * 3. Consulta de saldo () 
 * 4. Traspasar a la cuenta 1234 $500 (cuenta, cantidad)
 * 
 * Datos iniciales
 * Saldo inicial: $2000
 * Consultas de saldo = 2000
 * Depósitos = 0
 * Retiros = 0
 * 
 * 
 * Pasos a ejecutar
 * 1. Depositar 2000
 * 2. Retirar 450
 * 3. Consultar saldo
 * 4. Retirar 400
 * 5. Consultar saldo
 * 
 */

let bankAccounts = [2500,10500,200,4500]
let bankAccounts2 = [["id-1",2500,4],["id-2",10500,1],["id-3",200,10],["id-4",4500,3]]
let bankAccounts3 = [
    {
        accountID: "id-1",
        balance: 2500,
        queryAcc: 4
    },
    {
        accountID: "id-2",
        balance: 10500,
        queryAcc: 1
    },
    {
        accountID: "id-3",
        balance: 200,
        queryAcc: 10
    },
    {
        accountID: "id-4",
        balance: 4500,
        queryAcc: 3
    }
]

// soy el banco y quiero hacer un reporte 
// 1.- el total de dinero que estoy manejando al mes
// 2.- el total de consultas por cuenta al mes

console.log("Saldo por array 2 es: " + bankAccounts2[0][1])
console.log("-------------------------------------------------------------")

let sumaSaldo = 0
let sumaConsultas = 0


for (customer of bankAccounts3) {

    console.log("El saldo para el cliente: " + customer.accountID)
    console.log("Su saldo es de: " + customer.balance)
    sumaSaldo = sumaSaldo + customer.balance
    console.log("El saldo acumulado total es: " + sumaSaldo)

}

console.log("-------------------------------------------------------------")
console.log("La cantidad total en las cuentas bancarias es de: $" + sumaSaldo + " pesos")

for (let i=0; i<=bankAccounts2.length; i++) {

    console.log("La posición en el array es: " + i)
    console.log("Número de ID del cliente es: " + bankAccounts2[i][0])
    console.log("El número de consultas es: " + bankAccounts2[i][2])
    sumaConsultas = sumaConsultas + bankAccounts2[i][2]
    console.log("El número de consultas acumuladas es de: " + sumaConsultas)

}

console.log("-------------------------------------------------------------")
console.log("El número de consultas acumuladas es de: " + sumaConsultas)


/*
otra manera de hacerlo

for (let i=0; i<= bankAccounts3.length; i++){

}

*/

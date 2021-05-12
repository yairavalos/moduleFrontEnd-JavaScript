
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

let collectCounter = 0
let depositCounter = 0
let transferCounter = 0
let balanceQueries = 0 

let balance = 2000;

console.log(atm_deposit(2000))
console.log(atm_collect(450))
console.log(atm_balance_query())
console.log(atm_collect(400))
console.log(atm_balance_query())


function atm_collect(collectQty){

    if (collectQty !== 0 && collectQty <= balance) {
        balance -= collectQty 
        collectCounter += 1
        return "Your balance after withdrawal is: " + balance + " you have done: " + collectCounter + " withdrawals today"
    } else {
        return "Please check that Collection Qty is greater than 0 and its not Bigger than the Balance you have" 
    }

}

function atm_deposit(depositQty){

    if (depositQty !== 0) {
        balance += depositQty
        depositCounter += 1
        return "Your balance after deposit is: " + balance  + " you have done: " + depositCounter + " deposits today"
    } else {
        return "Please check that Deposit Qty its not missing"
    }

}

function atm_balance_query(){

    balanceQueries += 1
    return "Your current balance is: " + balance  + " you have done: " + balanceQueries + " queries today"

}

function atm_transfer(accountNum, transferQty){

    if (accountNum !== "" && transferQty >=0 && transferQty <= balance) {
        balance -= transferQty
        transferCounter += 1
        return "Your balance after tranfer is: " + balance  + " you have done: " + transferCounter + " transfers today"
    } else {
        return "Please check that Account Number is not missing, Transfer Qty is greater than 0 or is not Bigger than the Balance you have"
    }

}


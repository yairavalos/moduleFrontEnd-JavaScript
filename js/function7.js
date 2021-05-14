/*
    Simulación de un shopping cart

    function totalShoppingCart(arr) {
    // your code here 
    }

    let arr = 
        [ 
            ["Reloj", 500] , 
            ["Reloj", 300] , 
            ["Reloj", 1200] 
        ] 
    const totalAPagar = totalShoppingCart(arr)
    // 2000  

*/

let shopArray = [["Lentes",700],["Reloj",900],["Smartwatch",2200]]
let totalToPay

totalToPay = shopArray.reduce((accum,item) => accum += item[1],0)
console.log(totalToPay)

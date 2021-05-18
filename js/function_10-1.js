
// el koder ${name} tienes ${age} años
// el koder ${name} tienes ${age} años


let koders = [
    {
        name: 'jorge',
        lastname: 'camarillo',
        age: 30, 
    },
    {
        name: 'mario',
        lastname: 'almada',
        age: 31,
    }
]

koders.forEach(item => {
    item.getFullName = function(){
        return "El koder " + this.name + " " + this.lastname + " tiene " + this.age + " años"
    }
   }  
)

console.log(koders)

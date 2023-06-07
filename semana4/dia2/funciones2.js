//tipos de fuciones   son 3 
//funcio declarativa
//funcion anonima
//funcion flecha  arrow function


// declarativa 
           //argumentos o parametros
function nombre(a,b,c){
 return a+b-c
}
nombre()
console.log(nombre(20,10,5))

//funcion anonima o de xpresion

let sumar2 =function(a,b,c){
return a+b-c
}
console.log(sumar2(20,10,5))

//arrow function -funcion flecha

const sumar3 =(a,b,c)=>{
return a+b-c
}
console.log(sumar3(20,10,5))

///////////////////////////////////////////

//funcion de saludar

function saludar(nombre,apellido){
    // esto es un template string la contatnacion de texto  variables
return `hola mi nombre es ${nombre} y mi apellido es ${apellido}`

}

console.log(saludar("guillermo","sifuentes")) 

// podria en una sol linea  

const hello =()=>"hola como estan"

console.log(hello())

//  realizar un funcion que me avise si esta lloviendo o no

function avisoLuvia (estaLloviendo){
    if(estaLloviendo){
        console.log("si esta lloviendo")
    }else{
        console.log("no esta lloviendo")
    }
}

avisoLuvia(true)

///////////////////////////////////////////////////////////
//REPASO//

const numero = 20
const texto ="guilelrmo"
const bool = true
const nulo= null
const indefini= undefined


 let laptops =["nuevas",1500,true,50]

 // insertar un valor nuevo / red
 //accede a la catidad de elemento ...
 // eliminar el indice 0  del array

 laptops[4]="red"

 console.log(laptops.length)
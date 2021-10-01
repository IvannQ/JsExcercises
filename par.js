let num = 8
if(num % 2 == 0 ){
    console.log(`Tu numero ${num} es PAR.`)
}
else{
    console.log(`Tu numero ${num} NO ES PAR.`)
}


let edad = 20
if(edad >= 18){
    console.log(`Tienes ${edad} años, por lo tanto eres mayor de edad.`)
}
else{
    console.log(`Tienes ${edad} años, por lo tanto eres menor de edad.`)
}


let mes = "aaa"

if(mes > 1 && mes <=3 || mes === 10 || mes === 11 || mes === 12){
    console.log("Tu estacion es verano")
}
else if( mes >= 4 && mes <= 6){
     console.log("Tu estacion es otoño")
}
else if(mes >= 7 && mes <= 9){
    console.log("Tu estacion es invierno")
}

else{
    console.log("Numero de mes NO valido.")
}

let horario = 20
if(horario >= 0 && horario <= 5){
    console.log("Durmiendo")
}
else if(horario >= 6 && horario <= 11){
    console.log("Buenos dias")
}
else if(horario >= 12 && horario <=19){
    console.log("Buenas tardes")
}
else if(horario >= 20 && horario <= 24){
    console.log("Buenas noches")
}
else{
    console.log("Valor no valido")
}


let month = 4;
let mensaje = "Tu estacion del año es desconocida"

switch(month){
    case 1: mensaje = "Tu estacion del año es verano"
    break;
    case 2: mensaje = "Tu estacion del año es verano"
    break;
    case 3: mensaje = "Tu estacion del año es verano"
    break;
    case 4: mensaje = "Tu estacion es otoño"
    break;
    case 5: mensaje = "Tu estacion es otoño"
    break;
    case 6: mensaje = "Tu estacion es otoño"
    break;
    case 7: mensaje = "Tu estacion es invierno"
    break;
    case 8: mensaje = "Tu estacion es invierno"
    break;
    case 9: mensaje = "Tu estacion es invierno"
    break;
    case 10: mensaje = "Tu estacion es primavera"
    break;
    case 11: mensaje = "Tu estacion es primavera"
    break;
    case 12: mensaje ="Tu estacion es verano"
    break;
    default: mensaje
    break;
}
console.log(mensaje)
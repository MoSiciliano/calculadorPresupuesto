
    alert("¡Bienvenidos a Samana Transformaciones! Calculemos tu presupuesto...")
let nombre = prompt("Ingrese su nombre y (opcional) apellido")
let email = prompt("Ingrese su email")
//condicional
if (nombre != "") {
    alert ("hola" + " " + nombre)

} else {
    do{
    alert("Ingrese datos válidos por favor")
    nombre = prompt("Ingrese su nombre y (opcional) apellido")
    email = prompt("Ingrese su email")
    } while(nombre == "" && email == "")
}


const m2pintura = 2500
const m2deck =3000
const m2ceramica= 5000
let presupuestoTotal= 0;
//function
function Calculopresupuesto (){

    let empezar = 1;
    //ciclo
    while (empezar == 1) {

        let eleccionPresupuesto = prompt ("Elige que trabajo desea realizar: \n 1. Pintura \n 2. Deck \n 3. Piso" );
        let presupuesto = 0;
        //switch like condicional
        switch (eleccionPresupuesto) {
            case "1":
                let ambiente= ( Number (prompt("Ingrese los m2 del ambiente")));
                
                presupuesto= ambiente * m2pintura ;
                alert (`El precio los m2 de ambiente que indicó es: $${presupuesto}`)
            break;
            case "2":
                let deck=  (Number(prompt("Ingrese los m2 de deck")));
               
                presupuesto= deck* m2deck;
                alert (`El precio por los m2 de deck que indicó es: $${presupuesto}`);
            break;
            case "3":
                let piso =(Number (prompt("Ingrese los m2 del piso")));
                
                presupuesto= piso*m2ceramica;
                alert (`El precio los m2 de piso que indicó es: $${presupuesto}`);
            break;
            default :
                alert ("Ingrese una opción válida");
            break;
        }
        
        presupuestoTotal += presupuesto;

        empezar = Number(prompt('1.Seguir \n 2. Salir'));
    }
    alert(`El presupuesto total es: $${presupuestoTotal}`)
}
 
calculoPresupuesto ()
    alert (`Usted recibira un mail a ${email} con los detalles de su presupuesto, gracias por elegirnos!`)


        
        
/******************Clase_N4_Barrionuebo_Damián******************/

//Algoritmo para pareja
/*
//Función I
const comoEspiar = () => {
    console.log("Intrigesé");
    console.log("Escondasé");
    console.log("Obvservé");

    let camara = confirm("tiene camara?");

    if (!camara) {
        let anotador = confirm("Tiene un anotador?");
        
        if (!anotador) {
            console.log("Tome nota mental");
        } else {
            console.log("Tome nota");
        }
    } else {
        console.log("Grabe");
    }
    console.log("Sonria");
}
comoEspiar();

*/
//------------------------------------------------------

//Función II
/*
const sumaA = ()=>{
    let num1=prompt()
}
*/




//------------------------------------------------------//
//HEROES
/*
let  guerrero= ()=>{
    hp=14;
    hab1= dado(1,6);
        console.log(`guerrero hace ${hab1} de daño`);
    hab2= "";
}


let barbara= ()=>{
    hp=11;
    hab1= dado(1,8);
        console.log(`barbara hace ${hab1} de daño`);
    
    hab2= "";
}


let arballestera= ()=>{
    hp=11;
    hab1= dado(1,8);
        console.log(`arballestera hace ${hab1} de daño`);
    hab2= "";
}
*/




//------------------------------------------------------//
//ENEMIGOS
/*
let esqueletoEscudo =()=>{
    hp=14;
    hab1= dado(1,6);
    console.log(`Esqueleto escudero hace ${hab1} de daño`);
    hab2= "";
}

let esqueletoGuerrero =()=>{
    hp=11;
    hab1= dado(1,6);
    console.log(`Esqueleto guerrero hace ${hab1} de daño`);
    hab2= "";
}

let esqueletoArballestero =()=>{
    hp=11;
    hab1= dado(1,6);
    console.log(`Esqueleto arballestero hace ${hab1} de daño`);
    hab2= "";
}
*/


//------------------------------------------------------//
//Llamados
/*
barbara();
arballestera();
guerrero();
*/

//------------------------------------------------------//
//COMBATE

/*
hpGuerrero = hpGuerrero - "daño de enemigos";

hpBarbara = hpBarbara - "daño de enemigos";
*/

//------------------------------------------------------//
//DADOS

dado = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}
//------------------------------------------------------//

let enemigos = ["Esqueleto escudero", "Esqueleto guerrero"];
let vidaEsqueletoEscudero = 14;
let vidaEsqueletoGuerrero = 11;

let heroes = ["Heraldo", "Arballestera"]
let vidaHeraldo= 14;
let vidaArballestera= 11;

//------------------------------------------------------//

let dañoHeraldo = dado (0, 1);
    if (0 === dado(0,1)){
        dañoaAE = (dado(1,6));
        vidaEsqueletoEscudero -= dañoAE;
        console.log(`Heraldo hace ${dañoAE} de daño a ${enemigos[0]}`);
    }else{
        dañoAG = dado(1, 6);
        vidaEsqueletoGuerrero -= dañoAG;
        console.log(`Heraldo hace ${dañoAG} de daño a ${enemigos[1]}`);
    }

let dañoArballestera = dado (0, 1);
    if (0 === dado(0,1)){
        dañoAE = (dado(1,8));
        vidaEsqueletoEscudero -= dañoAE;
        console.log(`Arballestera hace ${dañoAE} de daño a ${enemigos[0]}`);
    }else{
        dañoAG = dado(1, 8);
        vidaEsqueletoGuerrero -= dañoAG;
        console.log(`Arballestera hace ${dañoAG} de daño a ${enemigos[1]}`);
    }

let dañoEsqueletoEscudero = dado (0, 1);
    if (0 === dado(0,1)){
        dañoAH = (dado(1,6));
        vidaHeraldo -= dañoAH;
        console.log(`Esqueleto Escudero hace ${dañoAH} de daño a ${heroes[0]}`);
    }else{
        dañoAA = dado(1, 6);
        vidaHeraldo -= dañoAA;
        console.log(`Esqueleto Escudero hace ${dañoAA} de daño a ${heroes[1]}`);
    }

let dañoEsqueletoGuerrero = dado (0, 1);
    if (0 === dado(0,1)){
        dañoAH = (dado(1,6));
        vidaArballestera -= dañoAH;
        console.log(`Esqueleto Guerrero hace ${dañoAH} de daño a ${heroes[0]}`);
    }else{
        dañoAA = dado(1, 6);
        vidaArballestera -= dañoAA;
        console.log(`Esqueleto Guerrero hace ${dañoAA} de daño a ${heroes[1]}`);
    }

console.log(`heraldo : ${vidaHeraldo}`);
console.log(`Arballestera : ${vidaArballestera}`);
console.log(`esqueleto escudero: ${vidaEsqueletoEscudero}`);
console.log(`esqueleto guerrero: ${vidaEsqueletoGuerrero}`);

//------------------------------------------------------//

while (stillAliveHeroes()){
    vidaHeraldo -= dañoAH;
    vidaArballestera -= dañoAA;
    vidaEsqueletoEscudero -= dañoAE;
    vidaEsqueletoGuerrero -= dañoAG;
}





stillAliveEnemy= () =>{
    if (vidaEsqueletoEscudero>0 && vidaEsqueletoGuerrero>0){
        return true;
    }else {
        false;
    }
}
stillAliveHeroes= () =>{
    if (vidaHeraldo>0 && vidaArballestera>0){
        return true;
    }else {
        false;
    }
}


/*
atacarEnemigo=()=>{
    if (0 === dado(0,1)){
        dado(1,6)
        console.log(`${enemigos[0]}`);
    }else{
        console.log(`${enemigos[1]}`)
    }
}

ataqueRandom=()=>{
    if (0===dado(0,1)){
        return true;
    }else{
        false;
    }
}

atacarHeroe=()=>{
    if (0 === dado(0,1)){
        console.log(`Atacar a ${heroes[0]}`);
    }else{
        console.log(`Atacar a ${heroes[1]}`)
    }
}
*/
// STILL ALIVE


/*
while(stillAliveEnemy()){
    vidaEsqueletoEscudero -= dañoArballestera && dañoHeraldo;
    vidaEsqueletoGuerrero -= dañoArballestera && dañoHeraldo;
    console.log (`Esqueleto E vida = ${vidaEsqueletoEscudero}`);
    console.log(`Esqueleto G vida = ${vidaEsqueletoEscudero}`);

}
*/
/* tambien se puede hacer así
stillAliveEnemy= () =>{
    return enemigos[1]>0 && enemigos[3]>0) ? true :false;
*/

/*
while (stillAliveHeroes()){
    vidaHeraldo -= dañoEsqueletoEscudero && dañoEsqueletoGuerrero;
    vidaArballestera -= dañoEsqueletoEscudero && dañoEsqueletoGuerrero;
    console.log(`herlado vida : ${vidaHeraldo}`);
    console.log(`arballestera vida : ${vidaArballestera}`);
}
*/
/*
if (stillAliveEnemy){
    console.log ("win");
} else {
    console.lof ("game over");
}
*/






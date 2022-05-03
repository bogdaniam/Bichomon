console.log(document.title);

//Ejercicio 1
//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.querySelector("#gen-1").innerHTML = "Generasión 1 Pokimon";

//Ejercicio 2
//Cambia el color de fondo de la primera generación de Pokimon.

let gen1Color = document.querySelector(".infocard-list");
gen1Color.style = "background-color: " + "blue";




//Ejercicio 3
//Imprime por consola la URL de la página
console.log(window.location.href);


//Ejercicio 4
//Imprime por consola el dominio de la página
console.log(window.location.hostname);


//Ejercicio 5
//Imprime todos los nodos de imagen.
let noImagen = document.querySelectorAll('img');
console.log(noImagen);


//Ejercicio 6
//Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
let cage = document.querySelectorAll('img');

for (let i = 0; i < cage.length; i++) {
    cage[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}



//Ejercicio 7
//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying


let pokemonList = document.querySelectorAll(".infocard-lg-data.text-muted");

let comp = "";

for (let i = 0; i < pokemonList.length; i++) {
    
    comp = pokemonList[i].querySelector(".itype.flying");

    console.log(comp);

     if (comp != null) {
        pokemonList[i].style = "background-color: " + "pink";
     };
    

};


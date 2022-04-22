// Consegna:
// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.


//1.1 CREARE UN FOR DA 1 A 100
//1.2 AGGIUNGERE 100 DIV A CONTAINER

// const gridContainer = document.querySelector(".grid-container");
const gridItem = document.querySelector(".grid-item");
generateGridItem();

function generateGridItem() {
    const gridContainer = document.querySelector(".grid-container");
    for (let i = 1; i <= 100; i++) {
            let number = 0;
            number += i;
            //inserisci in html con template
            gridContainer.innerHTML += `<div class="grid-item">${number}</div>`;
        }    
        return gridContainer;
    }
    






// gia si e inserito i 100 div e andiamo a mettere solo il contenuto <span>
// //DOM FUNCTIONS

// function generateGridItem(number) {
//     //crea un elemento html
//     const gridItem = document.createElement("div");

//     //aggiungo dentro il div il numero
//     insideGrid.innerHTML = `<span>${number}</span>`;

//     //aggiungo al div la classe grid-item
//     insideGrid.classList.add("grid-item");

//     return insideGrid;
// }

// GENERA UN NUMERO DA 1 A 100  STAMPA


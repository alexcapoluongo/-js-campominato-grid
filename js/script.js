// Consegna:
// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


//1.1 CREARE UN FOR DA 1 A 100
//1.2 AGGIUNGERE 100 DIV A CONTAINER

containerContent();

/**
 * Description: Questa funzione si occuperà del generare numeri da 1 a 100 e di conseguenza aggiungere al DOM 100 div 'grid-item' all'interno del di 'grid-container'
 * @returns {any}: DOM interface and interaction of the function. Nuove 100 grid-item e cambio colore al click
 */

function containerContent() {
    // 1.CREARE GRID ITEMS A APPEND A GRID CONTAINER
    // 1.1 Creare una variabile e associarla a grid-container
    const gridContainer = document.querySelector(".grid-container");

    // 1.2 Creare un ciclo for per generare numeri da 1 a 100
    for (let i = 1; i <= 100; i++) {
    // 1.3 creare una nuova costante e associarla alla funzione generateGridItem => Questa funzione crea gli elementi che saranno il contenuto del DOM
        const domElement = generateGridItem(i);

    // 1.4 event listener per il cambio colore
        domElement.addEventListener("click", function() {
        this.classList.add('active')})

    // 1.5 append element to container
        gridContainer.append(domElement);
       
    }    
    // 1.6 return the result
    return gridContainer;
}

/**
 * Description
 * @param {any} number numero da 1 a 100 generato dal ciclio for nella function 'containerContent'
 * @returns {any}: DOM functions= crea elementi div e aggiunge classi all'interno di esse
 */
function generateGridItem(number) {
    //crea una var associata a un div creato
    const newGridItem = document.createElement("div");

    //aggiungi numero all'interno del div
    newGridItem.innerHTML = `${number}`;

    //assegna classe grid item
    newGridItem.classList.add('grid-item');

    return newGridItem;

}


    



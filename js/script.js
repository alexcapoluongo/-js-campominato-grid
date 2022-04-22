// Consegna:
// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


//1.1 CREARE UN FOR DA 1 A 100
//1.2 AGGIUNGERE 100 DIV A CONTAINER

containerContent();

function containerContent() {
    // per ogni numero creo una grid item
    const gridContainer = document.querySelector(".grid-container");

    for (let i = 1; i <= 100; i++) {
        
        const domElement = generateGridItem(i);

        
        //append
        gridContainer.append(domElement);
        //inserisci in html elementi con template
        // gridContainer.innerHTML += `<div class="grid-item">${number}</div>`;

        //associa una variabile al dom e aggiungi con eventlistener una classe

        // const gridItem = document.querySelector(".grid-item");
        // gridItem.addEventListener("click",
        // function() {
        //     this.classList.add('active');
        // })
    }    
    return gridContainer;
}

function generateGridItem(number) {
    //crea una var associata a un div creato
    const newGridItem = document.createElement("div");

    //aggiungi numero all'interno del div
    newGridItem.innerHTML = `${number}`;

    //assegna classe grid item
    newGridItem.classList.add('grid-item');

    return newGridItem;

}


    



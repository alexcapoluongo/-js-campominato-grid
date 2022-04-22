// Consegna:
// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


//1.1 CREARE UN FOR DA 1 A 100
//1.2 AGGIUNGERE 100 DIV A CONTAINER

generateGridItem();

function generateGridItem() {
    const gridContainer = document.querySelector(".grid-container");
    for (let i = 1; i <= 100; i++) {
        let number = 0;
        number += i;
        //inserisci in html con template
        gridContainer.innerHTML += `<div class="grid-item">${number}</div>`;

        const gridItem = document.querySelector(".grid-item");
        gridItem.addEventListener("click",
        function makeGridBlue() {
            this.classList.add('active');
        })
    }    
    return gridContainer;
}


    



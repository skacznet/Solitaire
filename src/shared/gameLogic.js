export const generateCards = () => {
    let cards = [];
    let count = 0;
    for(let i=2; i<15; i++) {
        for(let j=0; j<4; j++) {
            cards.push({
                id: count,
                value: i,
                color: j%2,
                type: j
            });
            count++;
        }
    }
    return shuffle(cards);
}

export const generateDeckCards = cards => {
    let deck = [];
    for(let i = 28; i<52; i++) {
        deck.push({
            ...cards[i]
        });
    }
    return deck;
}

export const generatePilesCards = cards => {
    let piles = [[], [], [], [], [], [], []];
    let count = 0;
    for(let i=0; i<7; i++) {
        for(let j=0; j<=i; j++) {
            let hidden = true;
            if(j == i) {
                hidden = false;
            }
            piles[i].push({
                ...cards[count],
                hidden: hidden
            });
            count++;
        }
    }
    return piles;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
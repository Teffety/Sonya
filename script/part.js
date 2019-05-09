const main = document.querySelect('main');


const card = document.createElement('div');


const image = document.createElement('img');
const cardForImage = document.createElement('div');
const nameParagraph = document.createElement('h3');
const textParagraph = document.createElement('p');


cardForImage.appendChild(nameParagraph);
cardForImage.appendChild(textParagraph);

card.appendChild(image);
card.appendChild(cardForImage);





main.appendChild(card);

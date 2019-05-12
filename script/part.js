


export function cards(arr, num) {
    const card = document.createElement('div');

    card.classList = `gallery__item`;
    const divImg = document.createElement('div');
    divImg.className = 'gallery__item__imgBox'
    const image = document.createElement('img');
    image.src = `files/${arr.img}`;
    const cardForImage = document.createElement('div');
    cardForImage.classList = 'gallery__item__text'
    const nameParagraph = document.createElement('h3');
    nameParagraph.innerHTML = arr.h3;
    const textParagraph = document.createElement('p');
    textParagraph.innerHTML = arr.p;


    cardForImage.appendChild(nameParagraph);
    cardForImage.appendChild(textParagraph);

    divImg.appendChild(image)
    card.appendChild(divImg);
    card.appendChild(cardForImage);

    return card
}

export function form(array) {

    const form = document.createElement('form');
    const input = document.createElement('input');
    input.type = 'email';
    array.name != undefined ? input.placeholder = array.name : ' ';
    array.requiredEmail == true ? input.setAttribute('required',true) : ''
    const textArea = document.createElement('textarea');
  array.textareaName !=undefined ?   textArea.placeholder = array.textareaName : '';
    array.textareaCol != undefined ? textArea.cols = array.textareaCol : '';
    array.textareaRow != undefined ? textArea.rows = array.textareaRow : '';
    array.maxlength != undefined ? textArea.maxlength = array.maxlength : textArea.maxlength = 50;
    array.requiredArea == true ? textArea.setAttribute('required',true) : '';
    array.resize == true ? textArea.setAttribute('style','resize:none') : '';

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = array.textBTN;

    form.appendChild(input);
    form.appendChild(textArea);
    form.appendChild(textArea);
    form.appendChild(submit);
    return form
}

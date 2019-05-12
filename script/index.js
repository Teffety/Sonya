import {
  cards,
  form
} from "./part.js";
const contactText = {text:' Contact me',email:'blablabla@bla.bla',or:'or here'};
const json = [{
  img: '11512_sobaka-v-kraske.jpg',
  h3: 'test',
  p: 'lorem lorem lorem ollaa'
}, {
  img: 'background1.jpg',
  h3: 'test',
  p: 'lorem lorem lorem ollaaqwe123'
}, {
  img: 'background2.jpg',
  h3: 'test44',
  p: 'lorem lorem lorem ollaa12323    Sunt enim occaecat est ad pariatur id mollit excepteur in exercitation. lLaboris minim commodo commodo quis eiusmod dolor officia dolor aliqua minim cupidatat ipsum. Do anim voluptate dolor sunt ad labore velit quis eu sint fugiat non eiusmod qui. Exercitation aliqua pariatur sunt ea. Fugiat duis occaecat est consequat qui ipsum minim. Ipsum esse veniam incididunt ullamco consequat adipisicing officia consectetur magna sint reprehenderit qui qui. In incididunt labore commodo excepteur esse.'
}, {
  img: 'EwxxSdG5uWI.jpg',
  h3: 'test44',
  p: 'lorem lorem lorem ollaa12323'
}, {
  img: 'forest-wallpaper-1920x1080-003.jpg',
  h3: 'test44',
  p: 'lorem lorem lorem ollaa12323'
}, {
  img: 'head2.jpg',
  h3: 'test44',
  p: 'lorem lorem lorem ollaa12323'
}, {
  img: 'IMG_20180618_125110.jpg',
  h3: 'test44',
  p: 'lorem lorem lorem ollaa12323'
}, {
  img: 'title.jpg',
  h3: 'test44',
  p: 'lorem lorem lorem ollaa12323'
}];

const wrapper = document.getElementById('wrapper');
const header = document.querySelector('header');
const main = document.querySelector('main');
const content = document.getElementById('content');
const numbers = [1, 2, 3]
const btn1 = document.createElement('button');
btn1.className = 'main__content__btn';
btn1.id = 'btn1';
btn1.innerHTML = 'Иллюстрация';
btn1.addEventListener('click', (event) => renderPartIso());
const btn2 = document.createElement('button');
btn2.className = 'main__content__btn';
btn2.id = 'btn2';
btn2.innerHTML = 'Живопись и графика';
btn2.addEventListener('click', (event) => renderPartPaint());


content.appendChild(btn1);
content.appendChild(btn2);
main.appendChild(content);

const forms = {
  name: 'lol',
  requiredEmail:true,
  textareaName: 'lol2',
  requiredArea:true,
  textareaCol: 20,
  textareaRow: 5,
  maxlength:100,
  resize:true,
  textBTN: 'Send'
}



const renderPartIso = () => {
  let cont = document.getElementById('content');
  main.removeChild(cont);
  header.innerHTML = '';
  header.appendChild(menuBtn(numbers[0]));

  const contents = document.createElement('div');
  contents.id = 'content'
  contents.className = ' First';
  const arr = json.length;
  for (let i = 0; i < arr; i++) {

    contents.appendChild(new cards(json[i]));

  }


  main.appendChild(contents);
}
const renderPartPaint = () => {
  let cont = document.getElementById('content');
  main.removeChild(cont);
  header.innerHTML = '';
  header.appendChild(menuBtn(numbers[1]));

  const contents = document.createElement('div');
  contents.id = 'content';
  contents.className = ' Second';
  const arr = json.length;
  for (let i = 0; i < arr; i++) {

    contents.appendChild(new cards(json[i]));

  }
  main.appendChild(contents);
}
const renderContacts = () => {
  let cont = document.getElementById('content');
  main.removeChild(cont);
  header.innerHTML = '';
  header.appendChild(menuBtn(numbers[2]));
  const contents = document.createElement('div');
  contents.id = 'content';
  contents.className = 'Third';
const img = document.createElement('i');
img.className='labelSonay';
const textMessage = document.createElement('div');
textMessage.className= 'textMessage'
const text = document.createElement('p');
const email = document.createElement('p');
const or = document.createElement('p');
text.innerHTML = contactText.text;
email.innerHTML = contactText.email;
or.innerHTML = contactText.or;


    textMessage.appendChild(text);
    textMessage.appendChild(email);
    textMessage.appendChild(or);
    contents.appendChild(img);
    contents.appendChild(textMessage);
  contents.appendChild(new form(forms));


  main.appendChild(contents);
}
const menuBtn = (arg) => {

  const input1 = document.createElement('buttom');
  
  input1.id = 'submit';
  input1.innerHTML = 'Иллюстрация';
  input1.addEventListener('click', () => renderPartIso());


  const input2 = document.createElement('buttom');
  
  input2.id = 'submit';
  input2.innerHTML = 'Живопись и графика';
  input2.addEventListener('click', () => renderPartPaint());


  const input3 = document.createElement('buttom');
  
  input3.id = 'submit';
  input3.innerHTML = 'Контакнты';
  input3.addEventListener('click', () => renderContacts());

  if (arg == 1) {
    const div = document.createElement('div');
    div.className = 'headerDiv';
    div.appendChild(input2);
    div.appendChild(input3);
    return div
  } else if (arg == 2) {
    const div = document.createElement('div');
    div.className = 'headerDiv';
    div.appendChild(input1);
    div.appendChild(input3);
    return div
  } else if (arg == 3) {
    const div = document.createElement('div');
    div.className = 'headerDiv';
    div.appendChild(input1);
    div.appendChild(input2);
    return div
  }

  return p
}

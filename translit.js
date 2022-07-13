//Transliterator

const rus = [
    'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о',
    'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'ы', 'э', 'ю', 'я',
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О',
    'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Ы', 'Э', 'Ю', 'Я'
            ]
const eng = [
    'a', 'b', 'v', 'g', 'd', 'e', 'e', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o',
    'p', 'r', 's', 't', 'u', 'f', 'h', 'ts', 'ch', 'sh', 'y', 'e', 'yu', 'ya',
    'A', 'B', 'V', 'G', 'D', 'E', 'E', 'ZH', 'Z', 'I', 'Y', 'K', 'L', 'M', 'N', 'O',
    'P', 'R', 'S', 'T', 'U', 'F', 'H', 'TS', 'CH', 'SH', 'Y', 'E', 'YU', 'YA', 'Ts', 'Ch', 'Sh', 'Y', 'E', 'Yu', 'Ya'
            ]

    
  let poleTextIn = document.getElementById("textIn");
  poleTextIn.addEventListener("input", () => {
    let message = poleTextIn.value;
    let messageTranslit = "";
    let messageArray = Array.from(message);
    for (let i = 0; i < messageArray.length; i++) {
      let letter = messageArray[i];
      if (rus.includes(letter)) {
        messageTranslit = messageTranslit + eng[rus.indexOf(letter)];
      } else if (letter === "ъ" || letter === "ь") {
        messageTranslit = messageTranslit;
      } else {
        messageTranslit = messageTranslit + letter;
      }
    }
    textOut.innerHTML = messageTranslit;
  });


//   let poleTextIn = document.getElementById('textIn')
//   function translit () {
//   let message = poleTextIn.value;
//   let messageTranslit = '';
//   let messageArray = Array.from(message);
//   for (let i = 0; i < messageArray.length; i++) {
//     let letter = messageArray[i];
//     if (rus.includes(letter)) {
//       messageTranslit = messageTranslit + eng[rus.indexOf(letter)];
//     } else if (letter === "ъ" || letter === "ь") {
//       messageTranslit = messageTranslit;
//     } else {
//       messageTranslit = messageTranslit + letter;
//     }
//   }
//   textOut.innerHTML = messageTranslit;
// }
// poleTextIn.addEventListener('input', translit)
  
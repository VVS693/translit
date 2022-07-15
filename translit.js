//Transliterator

const rus = [
    'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о',
    'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'э', 'ю', 'я',
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О',
    'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Э', 'Ю', 'Я'
            ]
const eng = [
    'a', 'b', 'v', 'g', 'd', 'e', 'e', ['zh', 'zh'], 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o',
    'p', 'r', 's', 't', 'u', 'f', 'h', ['ts', 'ts'], ['ch', 'ch'], ['sh', 'sh'], ['shch', 'shch'], 'y', 'e', ['yu', 'yu'], ['ya', 'ya'],
    'A', 'B', 'V', 'G', 'D', 'E', 'E', ['ZH', 'Zh'], 'Z', 'I', 'Y', 'K', 'L', 'M', 'N', 'O',
    'P', 'R', 'S', 'T', 'U', 'F', 'H', ['TS', 'Ts'], ['CH', 'Ch'], ['SH', 'Sh'], ['SHCH', 'Shch'], 'Y', 'E', ['YU', 'Yu'], ['YA', 'Ya']
            ]           
const rusExtra = [
    'Ж', 'Ц', 'Ч', 'Ш', 'Щ', 'Ю', 'Я'
            ]

  let poleTextIn = document.getElementById("textIn");

  poleTextIn.addEventListener("input", () => {
    let message = poleTextIn.value;
    let messageArray = Array.from(message);
    let messageArrayTranslit = [];

    for (let i = 0; i < messageArray.length; i++) {
      let letter = messageArray[i];
      let letterPrev = messageArray[i - 1];

      if (
        rusExtra.includes(letterPrev) &&
        letter.toLowerCase() == letter &&
        messageArray.length > 1
      ) {
        messageArrayTranslit[i - 1] = eng[rus.indexOf(letterPrev)][1];
        messageArrayTranslit.push(eng[rus.indexOf(letter)][0]);
      } else if (rus.includes(letter)) {
        messageArrayTranslit.push(eng[rus.indexOf(letter)][0]);
      } else if (letter === "ъ" || letter === "ь") {
        messageArrayTranslit.push("");
      } else {
        messageArrayTranslit.push(letter);
      }
    }
    textOut.innerHTML = messageArrayTranslit.join("");
  });
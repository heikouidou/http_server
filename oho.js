// んにゃあああ　み、見ないでってえ…言ったにゃあん…っ！！
function encoho()
{
  let inputOho = document.getElementById("inputOho").value;

  let choice = document.getElementById("choice");
  let checkValue = choice.elements['radio'].value;

  if (checkValue == "encode") {
    document.getElementById("outputOho").value = morseCodeToOho(textToMorseCode(inputOho));
  }
  if (checkValue == "decode") {
    document.getElementById("outputOho").value = morseCodeToText(ohoToMorseCode(inputOho));
  }
}

function clearOho()
{
  console.log('pushed');
  document.getElementById("inputOho").value = '';
  document.getElementById("outputOho").value = '';
  console.log('cleared');
}

function xPost()
{
  location.replace("http://twitter.com/share?text=" + document.getElementById("outputOho").value);
}

const hiraganaToMorse = {
    'あ': '--.--', 'い': '.-', 'う': '..-', 'え': '-.---', 'お': '.-...',
    'か': '.-..', 'き': '-.-..', 'く': '...-', 'け': '-.--', 'こ': '----',
    'さ': '-.-.-.', 'し': '--.-.', 'す': '---.-', 'せ': '.---.', 'そ': '---.',
    'た': '-.', 'ち': '..-.', 'つ': '.--.', 'て': '.-.--', 'と': '..-..',
    'な': '.-.', 'に': '-.-.', 'ぬ': '....', 'ね': '--.-', 'の': '.---',
    'は': '-...', 'ひ': '--..-', 'ふ': '--.', 'へ': '.', 'ほ': '-..',
    'ま': '-..-', 'み': '..-.-', 'む': '-', 'め': '-...-', 'も': '-..-.',
    'や': '.--', 'ゆ': '-..--', 'よ': '--',
    'ら': '...', 'り': '--.', 'る': '-.--.', 'れ': '---', 'ろ': '.-.-',
    'わ': '-.-', 'を': '.---', 'ん': '.-.-.',
    'が': '.-....', 'ぎ': '-.-....', 'ぐ': '...-..', 'げ': '-.--..', 'ご': '----..',
    'ざ': '-.-.-...', 'じ': '--.-...', 'ず': '---.-..', 'ぜ': '.---...', 'ぞ': '---...',
    'だ': '----...', 'ぢ': '..-...', 'づ': '.--...', 'で': '.-.--..', 'ど': '..-....',
    'ば': '-.....', 'び': '--..-..', 'ぶ': '--...', 'べ': '---...-', 'ぼ': '-....',
    'ぱ': '-.....--.', 'ぴ': '--..-..--.', 'ぷ': '--...--.', 'ぺ': '...--.', 'ぽ': '-....--..', 'ー': '.--.-'
};

const alphabetToMorse = {
};

// ひらがなとアルファベットの両方をモールス信号に変換する連想配列を作成
const charToMorse = { ...hiraganaToMorse, ...alphabetToMorse };

const morseToOho ={
  '.': 'ア゛ォ', '-': 'ォォ', ' ': 'ンッ'
}

const ohoToMorse ={
  'ンッ': ' ', 'ォォ': '-'
}

const morseToHiragana = {
  '--.--': 'あ', '.-': 'い', '..-': 'う', '-.---': 'え', '.-...': 'お',
  '.-..': 'か', '-.-..': 'き', '...-': 'く', '-.--': 'け', '----': 'こ',
  '-.-.-.': 'さ', '--.-.': 'し', '---.-': 'す', '.---.': 'せ', '---.': 'そ',
  '-.': 'た', '..-.': 'ち', '.--.': 'つ', '.-.--': 'て', '..-..': 'と',
  '.-.': 'な', '-.-.': 'に', '....': 'ぬ', '--.-': 'ね', '.-.-': 'の',
  '-...': 'は', '--..-': 'ひ', '--.': 'ふ', '.': 'へ', '-..': 'ほ',
  '-..-': 'ま', '..-.-': 'み', '-': 'む', '-...-': 'め', '-..-.': 'も',
  '.--': 'や', '-..--': 'ゆ', '--': 'よ',
  '...': 'ら', '--.': 'り', '-.--.': 'る', '---': 'れ', '.-.-': 'ろ',
  '-.-': 'わ', '.---': 'を', '.-.-.': 'ん',
  '.-....': 'が', '-.-....': 'ぎ', '...-..': 'ぐ', '-.--..': 'げ', '----..': 'ご',
  '-.-.-...': 'ざ', '--.-...': 'じ', '---.-..': 'ず', '.---...': 'ぜ', '---...': 'ぞ',
  '----...': 'だ', '..-...': 'ぢ', '.--...': 'づ', '.-.--..': 'で', '..-....': 'ど',
  '-.....': 'ば', '--..-..': 'び', '--...': 'ぶ', '---...-': 'べ', '-....': 'ぼ',
  '-.....--.': 'ぱ', '--..-..--.': 'ぴ', '--...--.': 'ぷ', '...--.': 'ぺ', '-....--..': 'ぽ', '.--.-': 'ー'
};

// '-.-..': 'が', '--..': 'ぎ', '..-.': 'ぐ', '-.-.': 'げ', '---.': 'ご',
// '---.': 'ざ', '--.-': 'じ', '---.-': 'ず', '.---': 'ぜ', '---..': 'ぞ',
// '-.': 'だ', '..-.': 'ぢ', '.--.': 'づ', '.-.': 'で', '..-..': 'ど',
// '-...': 'ば', '--..-': 'び', '--.': 'ぶ', '.': 'べ', '-..': 'ぼ',
// '-...-': 'ぱ', '--..-..': 'ぴ', '--..': 'ぷ', '.': 'ぺ', '-..-.': 'ぽ'

const morseToAlphabet = {
};

// モールス信号からひらがなとアルファベットの両方に変換する連想配列を作成
const morseToChar = { ...morseToHiragana, ...morseToAlphabet };

// 文字列をモールス信号に変換する関数
function textToMorseCode(text) {
  let resultTTM = text.split('').map(char => charToMorse[char] || '').join(' ');
  console.log(resultTTM);
  return resultTTM;
}

// モールス信号を文字列に復号する関数
function morseCodeToText(morseCode) {
  let resultMTT = morseCode.split(' ').map(char => morseToChar[char] || '').join('');
  console.log(resultMTT);
  return resultMTT;
}

// モールス信号をオホ声に変換する関数
function morseCodeToOho(text) {
  let resultMTO = String(text).split('').map(char => morseToOho[char] || '').join('');
  console.log(resultMTO);
  return resultMTO;
}

//オホ声をモールス信号に変換する関数
function ohoToMorseCode(text){
  let newText = text.replace(/(ンッ)/g,' ');
  console.log(newText);
  let newText2 = newText.replace(/(ア゛ォ)/g, '.');
  console.log(newText2);
  let resultOTM = newText2.replace(/(ォォ)/g,'-');
  console.log(resultOTM);
  return resultOTM;
}
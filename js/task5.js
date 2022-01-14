let line;
line = prompt ("Введите номер карты!");
let CardNumbes = line.slice( 4 );
let firstNumbes = line.slice( 0,-4 );
let cardNumbers = "*"
let cardNumbersStart = cardNumbers.repeat(firstNumbes.length);
let result = cardNumbersStart + cardNumbers;
alert("Введите номер карты!" + result);

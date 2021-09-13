function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  // add a zero in front of numbers greater than 10
  document.getElementById("time").innerHTML =
    "The time is " +
    convertHourToName(h) +
    " o'clock and " +
    convertNumberToName(m) +
    " past";
  setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function convertHourToName(num) {
  if (num > 12) {
    num -= 12;
  }
  return convertNumberToName(num);
}
function convertNumberToName(num) {
  let lowNames = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tensNames = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let tens, ones, result;
  if (num < lowNames.length) {
    result = lowNames[num];
  } else {
    tens = Math.floor(num / 10);
    ones = num % 10;
    if (tens <= 9) {
      results = tensNames[tens - 2];
      if (ones > 0) {
        result += " " + lowNames[ones];
      }
    } else {
      result = "unknown";
    }
  }
  return result;
}

startTime();

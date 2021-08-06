module.exports = function toReadable (number) {
  let arr = [
      ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
      ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
      ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
  ] 
  let str = '';
  if (number == 0)
    return 'zero';
  let num = Array.from(String(number)).map(Number);
  while (num.length > 0) {
      if (num[0] == '0')
      {
        num.shift();
        continue;
      }  
      if (+(num.join('')) >= 0 && +(num.join('')) <= 20) {
          str += arr[0][+(num.join(''))];
          break;
      }
      str += arr[num.length-1][num[0]-1] + ' ';
      num.shift();
    } 
  return str.trim();
}
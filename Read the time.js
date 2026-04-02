/*
Given time in 24-hour format, convert it to words.

For example:
13:00 = one o'clock 
13:09 = nine minutes past one 
13:15 = quarter past one 
13:29 = twenty nine minutes past one
13:30 = half past one 
13:31 = twenty nine minutes to two
13:45 = quarter to two 
00:48 = twelve minutes to one
00:08 = eight minutes past midnight
12:00 = twelve o'clock
00:00 = midnight

Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'. 
*/
const numbers = {
    1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
    6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
    11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen",
    16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
    21: "twenty one", 22: "twenty two", 23: "twenty three", 24: "twenty four", 25: "twenty five",
    26: "twenty six", 27: "twenty seven", 28: "twenty eight", 29: "twenty nine"
};

function solve(time) {
  let [h, m] = time.split(":").map(Number);
  
  if (h === 0 && m === 0) return "midnight";
    
  if (m === 0) {
    let hourWord = h === 0 || h === 12 ? "twelve" : numbers[h % 12];
    return `${hourWord} o'clock`;
  }
    
  let minutesWord;
    
  if (m <= 30) {
    if (m === 15) minutesWord = "quarter";
    else if (m === 30) minutesWord = "half";
    else if (m === 1) minutesWord = "one minute";
    else minutesWord = numbers[m] + " minutes";
        
    let hourWord = h === 0 ? "midnight" : (h === 12 ? "twelve" : numbers[h % 12]);
    return `${minutesWord} past ${hourWord}`;
      
  } else {
    let minutesTo = 60 - m;
        
    if (minutesTo === 15) minutesWord = "quarter";
    else if (minutesTo === 1) minutesWord = "one minute";
    else minutesWord = numbers[minutesTo] + " minutes";
        
    let nextHour = (h % 12) + 1;
    let hourWord = nextHour === 12 ? "twelve" : numbers[nextHour];
    if (h === 23 && nextHour === 12) hourWord = "midnight";
        
    return `${minutesWord} to ${hourWord}`;
  }
}

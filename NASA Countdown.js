/*
You have the job to implement a countdown function that will be used for the next NASA spatial mission. The function takes a duration in milliseconds and return a string in countdown format.
If it's counting down, the first character should be '-', if it's counting up it should be '+'. Then it should return the number of: hours (min 2 units), minutes (2 units) and seconds (2 units).

countdown(-154800000)  // return  '-43:00:00'
countdown(0)           // return  '+00:00:00'
countdown(61000)       // return  '+00:01:01'
countdown(360000000)   // return '+100:00:00'
*/
function countdown (millisecs) {
  let totalSeconds = Math.abs(millisecs) / 1000;
  let hours = Math.floor(totalSeconds / 3600);
  let remainingSeconds = totalSeconds % 3600;
  let minutes = Math.floor(remainingSeconds / 60);
  let seconds = remainingSeconds % 60;
  let sign = millisecs < 0 ? '-' : '+';
  hours = hours < 10 ? '0' + hours : String(hours);
  minutes = minutes < 10 ? '0' + minutes : String(minutes);
  seconds = seconds < 10 ? '0' + seconds : String(seconds);
  return sign + hours + ":" + minutes + ":" + seconds;
}
    
console.log(countdown(-154800000));   // '-43:00:00'
console.log(countdown(0));            // '+00:00:00'
console.log(countdown(61000));        // '+00:01:01'
console.log(countdown(360000000));    // '+100:00:00' 

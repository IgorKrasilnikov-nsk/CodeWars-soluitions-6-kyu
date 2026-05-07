/*
Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

Your job is to help her out.

Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!"
If the event is today, return "Today is the day!"
Else, return "x days"
*/

function countDays(d){
  const now = new Date();
    
  const today = new Date(now);
  today.setUTCHours(0, 0, 0, 0);
    
  const eventDate = new Date(d);
  eventDate.setUTCHours(0, 0, 0, 0);
    
  const diffTime = eventDate - today;
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    
  if (diffDays === 0) return "Today is the day!";
  if (diffDays < 0) return "The day is in the past!";
  return diffDays + " days";
}

console.log(countDays(new Date("February 28, 2016"))); // "The day is in the past!"
console.log(countDays(new Date())); // "Today is the day!"
console.log(countDays(new Date("December 31, 2026")));    // "238 days"

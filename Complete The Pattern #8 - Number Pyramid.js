/*
Task:
You have to write a function pattern which creates the following Pattern(See Examples) upto n(parameter) number of rows.

Rules/Note:
If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
All the lines in the pattern have same length i.e equal to the number of characters in the last line.
Range of n is (-∞,100]

Examples:
pattern(5):
    1    
   121   
  12321  
 1234321 
123454321

pattern(10):
         1         
        121        
       12321       
      1234321      
     123454321     
    12345654321    
   1234567654321   
  123456787654321  
 12345678987654321 
1234567890987654321

pattern(15):
              1              
             121             
            12321            
           1234321           
          123454321          
         12345654321         
        1234567654321        
       123456787654321       
      12345678987654321      
     1234567890987654321     
    123456789010987654321    
   12345678901210987654321   
  1234567890123210987654321  
 123456789012343210987654321 
12345678901234543210987654321

pattern(20):
                   1                   
                  121                  
                 12321                 
                1234321                
               123454321               
              12345654321              
             1234567654321             
            123456787654321            
           12345678987654321           
          1234567890987654321          
         123456789010987654321         
        12345678901210987654321        
       1234567890123210987654321       
      123456789012343210987654321      
     12345678901234543210987654321     
    1234567890123456543210987654321    
   123456789012345676543210987654321   
  12345678901234567876543210987654321  
 1234567890123456789876543210987654321 
123456789012345678909876543210987654321

Hint: Use \n in string to jump to next line
*/

function pattern(n) {
  if (n <= 0) return "";

  let result = [];

  for (let i = 1; i <= n; i++) {
    let line = "";
    line += " ".repeat(n - i);
    
    for (let j = 1; j <= i; j++) {
      line += j % 10;
    }

    for (let j = i - 1; j >= 1; j--) {
      line += j % 10;
    }

    line += " ".repeat(n - i);
    result.push(line);
  }
  
  return result.join("\n"); 
}

console.log(pattern(7)); // "      1      \n     121     \n    12321    \n   1234321   \n  123454321  \n 12345654321 \n1234567654321"
console.log(pattern(1)); // "1"
console.log(pattern(4)); // "   1   \n  121  \n 12321 \n1234321"
console.log(pattern(0)); // ""
console.log(pattern(-25)); // ""
